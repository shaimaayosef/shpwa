import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";

import "./Checkout.override.style";
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";

export class Checkout extends SourceCheckout {
  render() {
    return (
      <main block="Checkout">
        <div>
          <h1>hello world</h1>
        </div>
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
