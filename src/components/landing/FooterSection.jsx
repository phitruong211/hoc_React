import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  company: {
    title: "Công ty",
    links: [
      { label: "Về chúng tôi", href: "#" },
      { label: "Tính năng", href: "#" },
      { label: "Giá cả", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  quickLinks: {
    title: "Liên kết nhanh",
    links: [
      { label: "Tài liệu", href: "#" },
      { label: "API", href: "#" },
      { label: "Hướng dẫn", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  support: {
    title: "Hỗ trợ",
    links: [
      { label: "Trung tâm trợ giúp", href: "#" },
      { label: "Liên hệ", href: "#" },
      { label: "Báo cáo lỗi", href: "#" },
      { label: "Góp ý", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-2.5 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Quản lý Đào tạo
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Giải pháp quản lý đào tạo toàn diện, hiệu quả và chuyên nghiệp
                cho mọi tổ chức.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@quanly-daotao.vn</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(+84) 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-white">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-white">
              {footerLinks.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-white">
              {footerLinks.support.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-indigo-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white mb-4">
                Theo dõi chúng tôi
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group bg-white/5 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 rounded-lg p-2.5 transition-all duration-300 hover:scale-110 hover:rotate-3"
                    >
                      <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Quản lý Đào tạo. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                Chính sách bảo mật
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                Điều khoản dịch vụ
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
