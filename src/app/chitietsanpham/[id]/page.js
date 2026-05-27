"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Slider from "../../../components/slider/slider";
// Đồng bộ dữ liệu xe máy từ file data chung
import { products } from "../../data";
import styles from "./detail.module.css";

export default function ProductDetail({ params }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.notFound}>
          <h1>Không tìm thấy dòng xe này</h1>
          <Link href="/">← Quay về trang chủ Showroom</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Khởi tạo danh sách ảnh slide cho xe máy
  const sliderImages = [product.image, ...products.filter(p => p.id !== product.id).slice(0, 4).map(p => p.image)];
  
  // Đồng bộ hoàn chỉnh các key dữ liệu gốc sang thông số xe máy chuyên nghiệp
  const specLabels = {
    dongCo: "Khối động cơ",
    congSuat: "Công suất tối đa",
    hopSo: "Hộp số / Truyền động",
    danDong: "Hệ thống truyền lực",
    tangToc: "Khả năng tăng tốc",
    tocDoToiDa: "Tốc độ tối đa",
    nhieuLieu: "Tiêu hao nhiên liệu",
    kichThuoc: "Kích thước & Trọng lượng",
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.breadcrumb}>
        <Link href="/">Trang chủ</Link>
        <span className={styles.breadSep}>›</span>
        <span>{product.name}</span>
      </div>

      <div className={styles.detailLayout}>
        {/* SLIDER HÌNH ẢNH MOTORBIKE */}
        <div className={styles.sliderArea}>
          <Slider images={sliderImages} autoPlay={true} interval={5000} />
        </div>

        {/* THÔNG TIN CHI TIẾT DÒNG XE */}
        <div className={styles.infoArea}>
          {product.badge && <span className={styles.badge}>{product.badge}</span>}
          <span className={styles.category}>Hãng xe: {product.category}</span>
          <h1 className={styles.carName}>{product.name}</h1>
          <div className={styles.priceRow}>
            <span className={styles.price}>{product.price}đ</span>
            {product.oldPrice && (
              <span className={styles.oldPrice}>{product.oldPrice}đ</span>
            )}
          </div>
          <p className={styles.remain}>
            {product.remain > 0 ? `✅ Còn sẵn ${product.remain} xe tại showroom` : "❌ Hàng đặt trước (Chờ bàn giao)"}
          </p>

          <div className={styles.actions}>
            <button className={styles.btnPrimary}>Nhận báo giá lăn bánh</button>
            <button className={styles.btnSecondary}>Đăng ký lái thử xe</button>
          </div>
        </div>
      </div>

      {/* BẢNG THÔNG SỐ KỸ THUẬT CƠ KHÍ */}
      <section className={styles.specsSection}>
        <h2 className={styles.sectionTitle}>Thông số kỹ thuật chi tiết</h2>
        <div className={styles.specsGrid}>
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className={styles.specItem}>
              <span className={styles.specLabel}>{specLabels[key] || key}</span>
              <span className={styles.specValue}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEW TRẢI NGHIỆM THỰC TẾ (RIDE REVIEW) */}
      <section className={styles.reviewSection}>
        <h2 className={styles.sectionTitle}>Đánh giá chi tiết từ các Bikers</h2>
        <div className={styles.reviewContent}>
          <h3>{product.name}: Khả năng vận hành thực tế 2026</h3>
          {product.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className={styles.reviewQuote}>
            <blockquote>
              &ldquo;Chúng tôi cam kết mang đến những dòng xe máy chính hãng với chính sách bảo hành tốt nhất
              và nhiều ưu đãi đặc quyền trả góp cho sinh viên trường TC Kinh tế - Kỹ thuật Quận 12.
              {product.name} chính là biểu tượng của sự mạnh mẽ và bền bỉ mà bạn xứng đáng sở hữu.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* SẢN PHẨM TƯƠNG TỰ (GỢI Ý CÙNG PHÂN KHÚC) */}
      <section className={styles.relatedSection}>
        <h2 className={styles.sectionTitle}>Các dòng xe cùng phân khúc có thể bạn quan tâm</h2>
        <div className={styles.relatedGrid}>
          {products
            .filter((p) => p.id !== product.id && p.category === product.category)
            .slice(0, 4)
            .map((related) => (
              <Link key={related.id} href={`/chitietsanpham/${related.id}`} className={styles.relatedCard}>
                <div className={styles.relatedImage}>
                  <Image
                    alt={related.name}
                    src={related.image}
                    width={280}
                    height={180}
                    style={{ objectFit: "contain", width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.relatedInfo}>
                  <h4>{related.name}</h4>
                  <span>{related.price}đ</span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}