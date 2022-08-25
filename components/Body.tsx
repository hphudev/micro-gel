import Image from 'next/image';
import styles from '../styles/Body.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
const Body = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`.${styles.main__slider}`, 0.3, { className: `${styles.main__slider}` });
  }, []);
  const stylesGroup = {
    image__box: styles.image__box,
    border__radius: styles.border__radius,
    min__height: styles.min__height,
    none__visibility: styles.none__visibility,
  };
  return (
    <div className={styles.container}>
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
      <div className={styles.slider}>
        <div className={styles.main__slider + ' ' + stylesGroup['border__radius']}>
          <div className={styles.image__box}>
            <Image src="/image/blue-pro.svg" width="408px" height="620px" alt="" />
          </div>
          <div className={styles.image__desc}>
            <h4>NIKA MICROGEL</h4>
            <h3>BLUE</h3>
            <p>
              Dòng sản phẩm Nika Microgel Blue có chức năng khử mùi vật nuôi, mùi cơ thể, mùi thuốc lá, mùi động vật và
              tủ bếp. Nika Microgel Blue không mùi, an toàn cho sức khỏe người tiêu dùng và giúp cải thiện chất lượng
              không khí, môi trường xung quanh.
            </p>
          </div>
        </div>
        <div
          className={styles.main__slider + ' ' + stylesGroup['min__height']}
          style={{
            backgroundColor: '#CB2027',
          }}
        >
          <div>red</div>
          <div className={stylesGroup['image__box'] + ' ' + stylesGroup['none__visibility']}>
            <Image src="/image/red-pro.svg" width="408px" height="620px" alt="" />
          </div>
          <div className={styles.image__desc + ' ' + stylesGroup['none__visibility']}>
            <h4>nika microgel</h4>
            <h3>red</h3>
            <p>
              Dòng sản phẩm Nika Microgel Red có chức năng khử mùi nước tiểu, nước hoa, nhà vệ sinh, tủ lạnh, mùi tanh
              và mùi phân ủ. Nikka Red là dòng sản phẩm thân thiện với sức khỏe người tiêu dùng va giúp cải thiện môi
              trường không khí trong lành hơn.
            </p>
          </div>
        </div>
        <div
          className={styles.main__slider + ' ' + ' ' + stylesGroup['min__height']}
          style={{
            backgroundColor: '#D4B03C',
          }}
        >
          <div>yellow</div>
          <div className={styles.image__box + ' ' + stylesGroup['none__visibility']}>
            <Image src="/image/yellow-pro.svg" width="408px" height="620px" alt="" />
          </div>
          <div className={styles.image__desc + ' ' + stylesGroup['none__visibility']}>
            <h4>nika microgel</h4>
            <h3>yellow</h3>
            <p>
              Dòng sản phẩm Nika Microgel Yellow nằm trong bộ 03 sản phẩm Nikka đình đám tại Nhật Bản, có chức năng khử
              mùi chống thấm, mùi hóa chất và mùi cháy (mùi khói). Với cơ chế cô đặc khí mùi và rơi làm xuống đất, Nikka
              Yellow đem đến sự an toàn cho sức khỏe và thân thiện với môi trường.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
