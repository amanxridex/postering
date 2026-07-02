console.log('Corner Cart Checkout Unified variant component loaded.');

/**
 * Promise that resolves once `CornerWebComponentsAPI` is ready.
 * Falls back to queuing the resolver on `window.CORNER_PENDING_EXTENDED_COMPONENTS`
 * if the API has not been bootstrapped yet.
 *
 * @type {Promise<void>}
 */
const whenCornerCartUnifiedReadyPromise =
  window.CornerWebComponentsAPI?.whenReady?.call(window.CornerWebComponentsAPI) ||
  new Promise(resolve => {
    // Fallback: API not loaded yet, queue the callback
    window.CORNER_PENDING_EXTENDED_COMPONENTS = window.CORNER_PENDING_EXTENDED_COMPONENTS || [];
    window.CORNER_PENDING_EXTENDED_COMPONENTS.push(resolve);
  });

whenCornerCartUnifiedReadyPromise.then(() => {
  /**
   * Creates a variant component for the `corner-cart-checkout` base component.
   * @param {string} tagName - The tag name of the variant component (e.g., 'corner-cart-checkout-split')
   * @param {string} className - The class name of the variant component (e.g., 'CornerCartCheckoutSplit')
   * @param {string} baseClassName - The class name of the base component (e.g., 'CornerCartCheckout')
   * @param {Function} callback - The callback function that receives the base class and returns the extended class
   * @returns {void}
   */
  window.CornerWebComponentsAPI.createVariantComponent(
    'corner-cart-checkout-unified',
    'CornerCartCheckoutUnified',
    'CornerCartCheckout',
    BaseClass => {
      return class CornerCartCheckoutUnified extends BaseClass {
        /**
         * Static counter used to generate unique container IDs for each instance.
         *
         * @type {number}
         * @static
         */
        static instanceCounter = 0;

        /**
         * Creates a cart checkout unified instance and assigns a unique container id.
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
          this._containerId = `corner-cart-checkout-unified-${++CornerCartCheckoutUnified.instanceCounter}`;
        }

        render() {
          return this.html`
                        <div id=${this._containerId}>
                            <div id="corner-cowi-cart-cta-wrapper">
                              <button
                                id="corner-cowi-cart-summary-card-cta-button"
                                aria-label="checkout-call-to-action-button"
                                class=${this.classMap({
                                  flex: true,
                                  'items-center': true,
                                  'justify-center': true,
                                  'text-center': true,
                                  'w-full': true,
                                  'cursor-pointer': true,
                                  'px-4': true,
                                  'py-5': true,
                                  'hover:pb-6': true,
                                  'hover:pt-4': true,
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
                                <span id="corner-cowi-cart-summary-card-cta-button-text">
                                  ${this.unsafeHTML(this.wordReplacer(this.getCartCtaButtonText, this.wordMap))}
                                </span>
                                <span class="mx-1" id="corner-cowi-cart-summary-card-cta-button-seperator">
                                  ·
                                </span>
                                <span id="corner-cowi-cart-summary-card-cta-button-price">
                                  ${this.unsafeHTML(this.formatMoney(this.totalAmount, this.cornerCurrencyFormat))}
                                </span>
                              </button>
                            </div>
                        </div>
                    `;
        }
      };
    },
  );
});
