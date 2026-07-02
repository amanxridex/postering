const whenCornerRelatedItemsListReadyPromise =
  window.CornerWebComponentsAPI?.whenReady?.call(window.CornerWebComponentsAPI) ||
  new Promise(resolve => {
    window.CORNER_PENDING_EXTENDED_COMPONENTS = window.CORNER_PENDING_EXTENDED_COMPONENTS || [];
    window.CORNER_PENDING_EXTENDED_COMPONENTS.push(resolve);
  });

whenCornerRelatedItemsListReadyPromise.then(() => {
  window.CornerWebComponentsAPI.createVariantComponent(
    'corner-related-items-list',
    'CornerRelatedItemsList',
    'CornerRelatedItems',
    BaseClass => {
      return class CornerRelatedItemsList extends BaseClass {
        render() {
          return this.html`
            <div id="corner-cowi-related-list-slider" class="relative mt-3">
              <div
                id="corner-cowi-related-items-list-items-wrapper"
                class="border border-cowi-outlines border-solid w-full rounded-lg"
              >
                ${this.repeat(
                  this.productList || [],
                  item =>
                    `${item?.id || 'item'}-${item?.preferredVariant?.id || item?.variants?.[0]?.id || 'variant'}`,
                  (item, index) => {
                    const featuredVariant = this.getFeaturedVariant(item);
                    if (!featuredVariant) return this.nothing;

                    const featuredImgUrl = this.getFeaturedImageUrl(item, featuredVariant);
                    const title = this.truncateText(item.alternateProductTitle || item.title, 40);
                    const showCompareAtPrice =
                      featuredVariant.compareAtPrice &&
                      featuredVariant.compareAtPrice > featuredVariant.price;
                    const isLoading =
                      this.isLoading &&
                      this.clickedProductId !== null &&
                      this.clickedProductId !== undefined &&
                      String(item.id) === String(this.clickedProductId);

                    return this.html`
                    <div
                      id=${`cowi-cart-recommended-item-list-wrapper-${index}`}
                      class="cowi-cart-recommended-item-list-wrapper flex items-center w-full p-2 border-b border-cowi-outlines border-solid"
                      data-corner-variant-id=${featuredVariant.id}
                      data-corner-product-id=${item.id}
                    >
                      <div
                        id=${`cowi-cart-recommended-item-list-image-${index}`}
                        class="cowi-cart-recommended-item-list-image max-w-[3em] max-h-16 bg-gray-300 rounded-lg overflow-hidden"
                      >
                        <a href=${item.url}>
                          <img class="w-full" src=${featuredImgUrl} alt="" />
                        </a>
                      </div>
                      <div
                        id=${`cowi-cart-recommended-item-list-info-wrapper-${index}`}
                        class="cowi-cart-recommended-item-list-info-wrapper px-2 flex-grow"
                      >
                        <a
                          id=${`cowi-cart-recommended-item-list-info-title-${index}`}
                          href=${item.url}
                          class="cowi-cart-recommended-item-list-info-title text-sm text-cowi-primary-type font-bold hover:text-[color:var(--corner-cowi-accent-bg)]"
                        >
                          ${this.unsafeHTML(title)}
                        </a>
                        <div
                          id=${`cowi-cart-recommended-item-list-info-price-${index}`}
                          class="cowi-cart-recommended-item-list-info-price flex items-center"
                        >
                          ${
                            showCompareAtPrice
                              ? this.html`
                                <p class="line-through text-cowi-secondary-type mr-2 text-xs">
                                  ${this.unsafeHTML(
                                    this.formatMoney(
                                      featuredVariant.compareAtPrice,
                                      this.currencyFormat,
                                    ),
                                  )}
                                </p>
                              `
                              : this.nothing
                          }
                          <p class="text-sm text-cowi-secondary-type font-bold">
                            ${this.unsafeHTML(this.formatMoney(featuredVariant.price, this.currencyFormat))}
                          </p>
                        </div>
                      </div>
                      ${
                        isLoading
                          ? this.html`
                            <div
                              id=${`cowi-cart-recommended-item-list-cta-loader-${index}`}
                              class="cowi-cart-recommended-item-list-cta-loader w-12 h-12 animate-spin"
                            >
                              <corner-icon type="loader" color=${this.loaderColor}></corner-icon>
                            </div>
                          `
                          : this.html`
                            <button
                              id=${`cowi-cart-recommended-item-list-cta-${index}`}
                              aria-label="related-items-cta-button"
                              @click=${() => this.dispatchRelatedItemAction(item)}
                              class="cowi-cart-recommended-item-list-cta bg-cowi-accent-bg cursor-pointer px-3 py-2 rounded text-sm font-bold text-cowi-accent-fg shrink-0"
                            >
                              <span>${this.unsafeHTML(this.ctaText)}</span>
                            </button>
                          `
                      }
                    </div>
                    `;
                  },
                )}
              </div>
            </div>
          `;
        }
      };
    },
  );
});
