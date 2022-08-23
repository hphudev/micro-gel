import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__main}>
          <div className={styles.logo__box}>
            <Image className="logo" height="42.4px" width="94px" src="/../image/logo.svg" alt="" />
          </div>

          <div className="navbar">
            <ul>
              <li
                style={{
                  marginLeft: 0,
                }}
              >
                <a href="#">Giới thiệu sản phẩm</a>
              </li>
              <li>
                <a href="#">Các dòng sản phẩm</a>
              </li>
              <li>
                <a href="#">Sứ mệnh</a>
              </li>
              <li>
                <a href="#">Kiểm nghiệm</a>
              </li>
              <li>
                <a href="#">Đánh giá</a>
              </li>
            </ul>
          </div>

          <div className={styles.button}>
            <button>Liên hệ</button>
          </div>
        </div>

        <div className={styles.header__footer}>
          <div className={styles.sub}>
            <p>
              <span className={styles.sub__p1}>Không gian trong lành</span>
              <br />
              <span className={styles.sub__p2}>an lành sức khỏe</span>
            </p>

            <div className={styles.button}>
              <button className="btn__order">Liên hệ đặt hàng</button>
            </div>
          </div>

          <div className={styles.image__box}>
            <Image src="/../image/tri-products.svg" alt="" width="467px" height="610px" />
          </div>

          <div className={styles.action}>
            <div>
              <button className={styles.action__mess}>
                <i className="fa-brands fa-facebook-messenger"></i>
              </button>
            </div>
            <div>
              <button className={styles.action__call}>
                <Image src="/icon/phone.svg" alt="" width="24px" height="24px" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.intro__title}>giới thiệu sản phẩm</h1>
          <div className={styles.intro__list}>
            <ul>
              <li>
                <Image src={'/image/khu-mui.svg'} width="250px" height="250px" alt="" />
                <span>Khử mùi</span>
                <a>
                  Nika Microgel có khả năng khử mùi vượt trội, giúp loại bỏ mùi hôi tận gốc mà không bị trộn lẫn với các
                  loại mùi khác.
                </a>
              </li>
              <li>
                <Image src={'/image/hieu-suat.svg'} width="250px" height="250px" alt="" />
                <span>Hiệu suất</span>
                <a>
                  Nika Microgel được pha loãng từ 100-300 lần với nước thường, mang đến hiệu suất tối đa cho người tiêu
                  dùng.
                </a>
              </li>
              <li>
                <Image src={'/image/toi-uu.svg'} width="250px" height="250px" alt="" />
                <span>Tối ưu</span>
                <a>
                  Nika Microgel được xuất xứ từ Nhật Bản, mức độ an toàn cao, không mùi và không ảnh hưởng đến sức khoẻ
                  người tiêu dùng nhờ cơ chế cô đặc mùi hôi từ dạng khí thành đặc và rơi xuống đất.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Header;
