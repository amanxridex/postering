/**
 * Promise that resolves once `CornerWebComponentsAPI` is ready.
 * Falls back to queuing the resolver on `window.CORNER_PENDING_EXTENDED_COMPONENTS`
 * if the API has not been bootstrapped yet.
 *
 * @type {Promise<void>}
 */
const whenCornerCartSplitReadyPromise =
  window.CornerWebComponentsAPI?.whenReady?.call(window.CornerWebComponentsAPI) ||
  new Promise(resolve => {
    // Fallback: API not loaded yet, queue the callback
    window.CORNER_PENDING_EXTENDED_COMPONENTS = window.CORNER_PENDING_EXTENDED_COMPONENTS || [];
    window.CORNER_PENDING_EXTENDED_COMPONENTS.push(resolve);
  });

whenCornerCartSplitReadyPromise.then(() => {
  /**
   * Creates a variant component for the `corner-cart-checkout` base component.
   * @param {string} tagName - The tag name of the variant component (e.g., 'corner-cart-checkout-split')
   * @param {string} className - The class name of the variant component (e.g., 'CornerCartCheckoutSplit')
   * @param {string} baseClassName - The class name of the base component (e.g., 'CornerCartCheckout')
   * @param {Function} callback - The callback function that receives the base class and returns the extended class
   * @returns {void}
   */
  window.CornerWebComponentsAPI.createVariantComponent(
    'corner-cart-checkout-split',
    'CornerCartCheckoutSplit',
    'CornerCartCheckout',
    BaseClass => {
      return class CornerCartCheckoutSplit extends BaseClass {
        /**
         * Static counter used to generate unique container IDs for each instance.
         *
         * @type {number}
         * @static
         */
        static instanceCounter = 0;

        /**
         * Creates a cart checkout split instance and assigns a unique container id.
         *
         * @param {...any} args - Arguments passed to the parent constructor.
         */
        constructor(...args) {
          super(...args);

          /**
           * Unique container ID for this instance.
           *
           * @type {string}
           * @private
           */
          this._containerId = `corner-cart-checkout-split-${++CornerCartCheckoutSplit.instanceCounter}`;
        }

        get getCartCtaButtonText() {
          return this.getCurrentLanguage.cart?.cart_list_cta || '';
        }

        render() {
          return this.html`
                        <div id=${this._containerId}>
                            <div
                              id="corner-cowi-cart-cta-wrapper"
                              class=${this.classMap({
                                flex: true,
                                'border-t': this.showCartTotal,
                                'border-solid': this.showCartTotal,
                                'border-cowi-outlines': this.showCartTotal,
                              })}          
                            >

                            <div
                              id="corner-cowi-cart-cta-total-price-wrapper"
                              class="px-5 py-3 flex-1 min-w-max"
                            >
                              <div 
                                id="corner-cowi-cart-cta-total-price-label" 
                                class="text-sm text-cowi-secondary-type leading-snug">
                                  ${this.unsafeHTML(this.getTotalText)}
                              </div>
                              <div 
                                id="corner-cowi-cart-cta-total-price-amount" 
                                class="text-lg font-extrabold text-cowi-primary-type leading-snug">
                                  ${this.unsafeHTML(this.formatMoney(this.totalAmount, this.cornerCurrencyFormat))}
                              </div>
                            </div>

                            <button
                               id="corner-cowi-cart-summary-card-cta-button"
                               aria-label="checkout-call-to-action-button"
                               class=${this.classMap({
                                 flex: true,
                                 'items-center': true,
                                 'justify-center': true,
                                 'flex-1': true,
                                 'hover:basis-1/2': true,
                                 'bg-cowi-cta-bg-hover-state': true,
                                 'text-center': true,
                                 'cursor-pointer': true,
                                 'p-4': true,
                                 'bg-cowi-accent-bg': true,
                                 'text-cowi-accent-fg': true,
                                 'font-base': true,
                                 'font-bold': true,
                                 'transition-all': true,
                                 'text-lg': true,
                                 'opacity-50': this.isCartLoading,
                               })}
                               @click=${() => this.handleCheckoutSelection()}
                              >
                               <div>
                                 ${this.unsafeHTML(this.wordReplacer(this.getCartCtaButtonText, this.wordMap))}
                               </div>
                              </button>
                            </div>
                        </div>
                    `;
        }
      };
    },
  );
});
