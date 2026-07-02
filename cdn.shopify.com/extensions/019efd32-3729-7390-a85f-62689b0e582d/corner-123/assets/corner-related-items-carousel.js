const whenCornerRelatedItemsCarouselReadyPromise =
  window.CornerWebComponentsAPI?.whenReady?.call(window.CornerWebComponentsAPI) ||
  new Promise(resolve => {
    window.CORNER_PENDING_EXTENDED_COMPONENTS = window.CORNER_PENDING_EXTENDED_COMPONENTS || [];
    window.CORNER_PENDING_EXTENDED_COMPONENTS.push(resolve);
  });

whenCornerRelatedItemsCarouselReadyPromise.then(() => {
  window.CornerWebComponentsAPI.createVariantComponent(
    'corner-related-items-carousel',
    'CornerRelatedItemsCarousel',
    'CornerRelatedItems',
    BaseClass => {
      return class CornerRelatedItemsCarousel extends BaseClass {
        render() {
          return this.html`
            <div id="corner-cowi-cart-related-products-list" class="w-full rounded-lg flex items-center py-3">
              <corner-carousel
                id="corner-cowi-cart-related-product-slider"
                class="w-full block"
                .itemsPerPage=${1}
                .autoScroll=${this.enableAutoplay}
                .autoScrollInterval=${5000}
                .controllerType=${'bigButtons'}
                .showDots=${true}
              >
                ${this.map(this.productList || [], (item, index) => {
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
                      id=${`cowi-cart-recommended-item-carousel-wrapper-${index}`}
                      class="cowi-cart-recommended-item-carousel-wrapper flex items-center shrink-0 w-full  box-border"
                      data-corner-variant-id=${featuredVariant.id}
                      data-corner-product-id=${item.id}
                    >
                      <div
                        id=${`cowi-cart-recommended-item-carousel-image-${index}`}
                        style="width: 15%"
                        class="cowi-cart-recommended-item-carousel-image  max-h-16 bg-gray-300 overflow-hidden rounded-lg"
                      >
                        <a href=${item.url}>
                          <img class="w-full h-full object-contain" src=${featuredImgUrl} alt="" />
                        </a>
                      </div>
                      <div
                        id=${`cowi-cart-recommended-item-carousel-info-wrapper-${index}`}
                        class="cowi-cart-recommended-item-carousel-info-wrapper flex w-full min-w-0 justify-between items-center px-2 flex-grow"
                      >
                        <div
                          class="cowi-cart-recommended-item-carousel-info min-w-0 flex-grow"
                          id=${`cowi-cart-recommended-item-carousel-info-${index}`}
                        >
                          <a
                            id=${`cowi-cart-recommended-item-carousel-info-title-${index}`}
                            href=${item.url}
                            class="cowi-cart-recommended-item-carousel-info-title text-sm text-cowi-primary-type font-bold hover:text-[color:var(--corner-cowi-accent-bg)]"
                          >
                            ${this.unsafeHTML(title)}
                          </a>
                          <div
                            id=${`cowi-cart-recommended-item-carousel-info-price-${index}`}
                            class="cowi-cart-recommended-item-carousel-info-price flex items-center"
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
                              ${this.unsafeHTML(
                                this.formatMoney(featuredVariant.price, this.currencyFormat),
                              )}
                            </p>
                          </div>
                        </div>
                        ${
                          isLoading
                            ? this.html`
                              <div
                                id=${`cowi-cart-recommended-item-carousel-cta-loading-${index}`}
                                class="cowi-cart-recommended-item-carousel-cta-loading w-12 h-12 animate-spin"
                              >
                                <corner-icon type="loader" color=${this.loaderColor}></corner-icon>
                              </div>
                            `
                            : this.html`
                              <button
                                id=${`cowi-cart-recommended-item-carousel-cta-${index}`}
                                aria-label="related-items-cta-button"
                                @click=${() => this.dispatchRelatedItemAction(item)}
                                class="cowi-cart-recommended-item-carousel-cta bg-cowi-accent-bg cursor-pointer px-3 py-2 rounded text-sm font-bold text-cowi-accent-fg"
                              >
                                <span>${this.ctaText}</span>
                              </button>
                            `
                        }
                      </div>
                    </div>
                  `;
                })}
              </corner-carousel>
            </div>
          `;
        }
      };
    },
  );
});
