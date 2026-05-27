"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
// Danh mục và sản phẩm đã được đồng bộ sang xe máy
import { products, categories } from "./data"; 
import styles from "./page.module.css";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const pillRef = useRef(null);
  const categoryRefs = useRef([]);

  // Bộ lọc sản phẩm theo hãng xe (Honda, Yamaha...) và từ khóa tìm kiếm
  const filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === "Tất cả" || product.category === activeCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  useEffect(() => {
    const activeIndex = categories.indexOf(activeCategory);
    const activeBtn = categoryRefs.current[activeIndex];
    if (activeBtn && pillRef.current) {
      pillRef.current.style.left = activeBtn.offsetLeft + "px";
      pillRef.current.style.width = activeBtn.offsetWidth + "px";
    }
  }, [activeCategory]);

  // Hiệu ứng cuộn hiển thị khí động học mượt mà (Reveal on scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <div className={styles.container}>
      <Header />

      {/* HERO SECTION - BANNER XE PHÂN KHỐI LỚN SIÊU MẠNH MẼ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Thế hệ mới 2026</span>
          <h1 className={styles.heroTitle}>Honda CBR150R Racing</h1>
          <p className={styles.heroSubtitle}>
            Trải nghiệm uy lực dẫn đầu phân khúc với động cơ DOHC mạnh mẽ, thiết kế khí động học thể thao cắt gió và công nghệ phanh ABS an toàn tuyệt đối.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/chitietsanpham/1">
              <button className={styles.heroBtnPrimary}>Đặt xe ngay hôm nay</button>
            </Link>
            <button className={styles.heroBtnSecondary}>Đăng ký lái thử ›</button>
          </div>
        </div>
        <div className={styles.heroImage}>
  <Image
    alt="Honda CBR150R Racing"
    src="/images/xe1.jpg" // Thế tạm bằng ảnh xe1.jpg có sẵn trong thư mục của bạn
    width={550}
    height={400}
    priority
    style={{ objectFit: "contain" }}
  />
</div>
      </section>

      {/* CATEGORY BAR - THANH CHỌN THƯƠNG HIỆU XE MÁY (HONDA, YAMAHA...) */}
      <div id="products" className={`${styles.categoryBarWrapper} ${styles.reveal}`}>
        <div className={styles.categoryBar}>
          <div className={styles.activePill} ref={pillRef}></div>
          {categories.map((cat, i) => (
            <button
              key={cat}
              ref={(el) => (categoryRefs.current[i] = el)}
              className={`${styles.categoryItem} ${activeCategory === cat ? styles.activeText : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className={styles.mainLayout}>
        <div className={styles.mainContent}>
          <h2 className={styles.sectionHeading}>Dòng xe nổi bật</h2>
          <div className={styles.productGrid}>
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`${styles.product} ${styles.reveal}`}
                style={{ "--delay": i % 4 }}
              >
                {product.badge && <span className={styles.badge}>{product.badge}</span>}
                <Link href={`/chitietsanpham/${product.id}`}>
                  <div className={styles.productImage}>
                    <Image
                      alt={product.name}
                      src={product.image}
                      width={300}
                      height={200}
                      style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <div className={styles.productPrice}>{product.price}đ</div>
                    <div className={styles.productRemain}>
                      {product.remain > 0 ? `Còn sẵn ${product.remain} xe` : "Chờ đặt hàng"}
                    </div>
                  </div>
                </Link>
                <div className={styles.actionButtons}>
                  <Link href={`/chitietsanpham/${product.id}`} style={{ flex: 1 }}>
                    <button className={styles.buyBtn}>Thông số & Chi tiết</button>
                  </Link>
                  <button className={styles.cartBtn}>+ So sánh xe</button>
                </div>
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p style={{ textAlign: "center", color: "#666", padding: "60px 0" }}>
              Không tìm thấy dòng xe hoặc phiên bản phù hợp.
            </p>
          )}
        </div>

        {/* SIDEBAR - CHÍNH SÁCH ĐẶC QUYỀN SHOWROOM MOTOR */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarBox}>
            <h4>🔥 Ưu đãi đặt trước</h4>
            <p>Tặng ngay gói phụ kiện nâng cấp trị giá 5 triệu đồng và miễn phí phí trước bạ khi đặt xe online hôm nay.</p>
          </div>
          <div className={styles.sidebarBox}>
            <h4>🔄 Trả góp 0% lãi suất</h4>
            <p>Hỗ trợ thủ tục trả góp nhanh chóng trong 15 phút, xét duyệt hồ sơ trực tuyến, lấy xe ngay tại đại lý gần nhất.</p>
          </div>
          <div className={styles.sidebarBox}>
            <h4>🚚 Giao xe tận nhà</h4>
            <p>Hỗ trợ vận chuyển xe bằng xe chuyên dụng an toàn, bàn giao tận nơi trên toàn quốc đầy đủ giấy tờ chính ngạch.</p>
          </div>
          <div className={styles.sidebarBox}>
            <h4>🛡️ Bảo hành chính hãng</h4>
            <p>Cam kết bảo hành lên tới 3 năm hoặc 30.000 km theo đúng tiêu chuẩn khắt khe từ Honda, Yamaha Việt Nam.</p>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}