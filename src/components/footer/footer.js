import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* CỘT PHÂN LOẠI DÒNG XE MÁY */}
        <div className={styles.footerColumn}>
          <h3>Khám phá</h3>
          <ul>
            <li>Xe côn tay thể thao</li>
            <li>Xe tay ga thời trang</li>
            <li>Xe số phổ thông</li>
            <li>Xe mô tô phân khối lớn</li>
            <li>Phụ tùng chính hãng</li>
          </ul>
        </div>
        
        {/* CỘT HỖ TRỢ KHÁCH HÀNG MUA XE */}
        <div className={styles.footerColumn}>
          <h3>Hỗ trợ</h3>
          <ul>
            <li>Tính toán trả góp 0%</li>
            <li>Đăng ký lái thử trực tuyến</li>
            <li>Chính sách bảo hành xe</li>
            <li>Quy trình đăng ký biển số</li>
          </ul>
        </div>
        
        {/* GIỮ NGUYÊN THÔNG TIN TRƯỜNG HỌC ĐỂ NỘP BÀI CAO CẤP */}
        <div className={styles.footerColumn}>
          <h3>Trường TC Kinh tế - Kỹ thuật Quận 12</h3>
          <ul className={styles.contactList}>
            <li><strong>CS1:</strong> 592 Nguyễn Ảnh Thủ, P. Trung Mỹ Tây, Quận 12, TP.HCM</li>
            <li><strong>CS2:</strong> 36 Nguyễn Văn Vân, P. Hiệp Thành, Quận 12, TP.HCM</li>
            <li><strong>Điện thoại:</strong> (058) 979.46.53</li>
            <li><strong>Email:</strong> tuyensinh@dttec.edu.vn</li>
          </ul>
        </div>
        
        {/* KHU VỰC NHẬN TIN ƯU ĐÃI SHOWROOM */}
        <div className={styles.footerColumn}>
          <h3>Nhận thông tin ưu đãi</h3>
          <p className={styles.footerDesc}>
            Đăng ký email để không bỏ lỡ các chương trình giảm giá trước bạ, quà tặng phụ kiện và bảng giá xe mới nhất.
          </p>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Nhập email của bạn..." />
            <button>Đăng ký</button>
          </div>
        </div>
      </div>
      
      {/* KHU VỰC BẢN QUYỀN TÁC GIẢ */}
      <div className={styles.footerBottom}>
        <div>Bản quyền © 2026 Nguyễn Võ Gia Huy - WEB12B1</div>
        <div className={styles.legalLinks}>
          <span>Chính sách quyền riêng tư</span>
          <span className={styles.separator}>|</span>
          <span>Điều khoản sử dụng</span>
          <span className={styles.separator}>|</span>
          <span>Pháp lý chính sách</span>
        </div>
        <div className={styles.region}>Việt Nam</div>
      </div>
    </footer>
  );
}