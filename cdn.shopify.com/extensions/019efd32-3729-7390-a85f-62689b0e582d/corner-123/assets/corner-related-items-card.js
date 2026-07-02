const whenCornerRelatedItemsCardReadyPromise =
  window.CornerWebComponentsAPI?.whenReady?.call(window.CornerWebComponentsAPI) ||
  new Promise(resolve => {
    window.CORNER_PENDING_EXTENDED_COMPONENTS = window.CORNER_PENDING_EXTENDED_COMPONENTS || [];
    window.CORNER_PENDING_EXTENDED_COMPONENTS.push(resolve);
  });

whenCornerRelatedItemsCardReadyPromise.then(() => {
  window.CornerWebComponentsAPI.createVariantComponent(
    'corner-related-items-card',
    'CornerRelatedItemsCard',
    'CornerRelatedItems',
    BaseClass => {
      return class CornerRelatedItemsCard extends BaseClass {
        render() {
          return this.html`
            <div id="corner-cowi-related-items-cards-wrapper" class="relative">
              <div
                id="corner-cowi-related-items-card-items-wrapper"
                class="overflow-x-auto w-full py-2"
              >
                <div class="flex flex-no-wrap transition-all w-full">
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
                        id=${`cowi-cart-recommended-item-card-wrapper-${index}`}
                        class="cowi-cart-recommended-item-card-wrapper w-72 flex flex-col flex-shrink-0 p-2 border border-cowi-outlines border-solid mr-2 rounded-lg bg-cowi-card-bg"
                      >
                        <div
                          id=${`cowi-cart-recommended-item-card-info-wrapper-${index}`}
                          class="cowi-cart-recommended-item-card-info-wrapper flex grow items-center"
                          data-corner-variant-id=${featuredVariant.id}
                          data-corner-product-id=${item.id}
                        >
                          <div
                            id=${`cowi-cart-recommended-item-card-image-${index}`}
                            class="cowi-cart-recommended-item-card-image max-w-[3em] max-h-20 bg-gray-300 overflow-hidden rounded-lg"
                          >
                            <a href=${item.url}>
                              <img class="w-full" src=${featuredImgUrl} alt="" />
                            </a>
                          </div>
                          <div
                            id=${`cowi-cart-recommended-item-card-info-${index}`}
                            class="px-2 flex-grow leading-none"
                          >
                            <a
                              id=${`cowi-cart-recommended-item-card-info-title-${index}`}
                              href=${item.url}
                              class="cowi-cart-recommended-item-card-info text-sm text-cowi-primary-type font-bold hover:text-[color:var(--corner-cowi-accent-bg)]"
                            >
                              ${this.unsafeHTML(title)}
                            </a>
                            <div
                              id=${`cowi-cart-recommended-item-card-info-price-${index}`}
                              class="cowi-cart-recommended-item-card-info-price"
                            >
                              ${
                                showCompareAtPrice
                                  ? this.html`
                                    <p class="line-through mr-2 text-cowi-secondary-type text-xs">
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
                                ${this.unsafeHTML(
                                  this.formatMoney(featuredVariant.price, this.currencyFormat),
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                        ${
                          isLoading
                            ? this.html`
                              <div class="w-12 h-12 animate-spin mx-auto">
                                <corner-icon type="loader" color=${this.loaderColor}></corner-icon>
                              </div>
                            `
                            : this.html`
                              <button
                                id=${`cowi-cart-recommended-item-cta-${index}`}
                                aria-label="cowi-cart-recommended-item-cta related-items-cta-button"
                                @click=${() => this.dispatchRelatedItemAction(item)}
                                class="bg-cowi-accent-bg cursor-pointer mt-2 p-3 rounded text-sm font-bold text-cowi-accent-fg w-full"
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
            </div>
          `;
        }
      };
    },
  );
});
