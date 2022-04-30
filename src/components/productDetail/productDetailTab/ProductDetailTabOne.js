import { Tabs } from "antd";

import Container from "../../other/Container";
import ProductDetailReviewItem from "../elements/ProductDetailReviewItem";

const { TabPane } = Tabs;

export default function ProductDetailTabOne() {
  return (
    <div className="product-detail-tab-one">
      <Container>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Description" key="1">
            <div className="product-detail-tab-item -description">
              <p className="tab-des--bold">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
                mattis drostique des commodo pharetras loremos.
              </p>
              <h5 className="tab-title">Products Infomation</h5>
              <p className="tab-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo possimus quae tenetur. Porro aliquam quaerat dolorum pariatur molestias commodi ipsa
              </p>
              <h5 className="tab-title">Material used</h5>
              <p className="tab-des">
                Polyester is deemed lower quality due to its none natural
                quality’s. Made from synthetic materials, not natural like wool.
                Polyester suits become creased easily and are known for not
                being breathable. Polyester suits tend to have a shine to them
                compared to wool and cotton suits, this can make the suit look
                cheap. The texture of velvet is luxurious and breathable. Velvet
                is a great choice for dinner party jacket and can be worn all
                year round.
              </p>
            </div>
          </TabPane>
          <TabPane tab="Customer Reviews(5)" key="2">
            <div className="product-detail-tab-item -review">
              <ProductDetailReviewItem />
              <ProductDetailReviewItem />
            </div>
          </TabPane>
          <TabPane tab="Additional information" key="3">
            <div className="product-detail-tab-item -info">
              <table>
                <tr>
                  <td>Outer Shell</td>
                  <td>100% polyester</td>
                </tr>
                <tr>
                  <td>Lining</td>
                  <td>100% polyurethane</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>S, M, L, XL</td>
                </tr>
                <tr>
                  <td>Colors</td>
                  <td>Grey, Red, Blue, Black</td>
                </tr>
                <tr>
                  <td>Care</td>
                  <td>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/shop/shop-detail/care-icons.png"
                      }
                      alt="Care icon"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </TabPane>
        </Tabs>
      </Container>
    </div>
  );
}
