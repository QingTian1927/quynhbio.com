export const languages = {
    en: 'English',
    vi: 'Tiếng Việt',
};

export const wordOrder = {
    en: 'adjective-noun',
    vi: 'noun-adjective',
}

export const defaultLang = 'vi';
export const currentYear = new Date().getFullYear();

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.shop': 'Shop',
        'nav.blog': 'Blog',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        'footer.copyright': `Copyright © ${currentYear} QuynhBio. All rights reserved.`,
        'footer.sitemap': 'Site Map',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',

        'home.hero.title.firstHalf': 'Become more',
        'home.hero.title.beautiful': 'beautiful',
        'home.hero.title.preBreak': ' ',
        'home.hero.title.secondHalf': 'with Quỳnh Bio',
        'home.hero.subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat.',
        'home.hero.shop-now': 'Shop Now',
        'home.hero.contact-us': 'Contact Us',
        'home.featured-products': 'Featured Products',
        'home.faqs': 'Frequently Asked Questions',

        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Have a problem? Feel free to contact us.',
        'contact.methods': 'Contact Methods',
        'contact.phone': 'Phone',
        'contact.messenger': 'Facebook Messenger',
        'contact.officeAddress': 'Office Address',
        'contact.toggleMapTheme': 'Toggle Map Theme',
        'contact.toggleMapThemeHint': 'This is helpful when viewing the map in satellite mode',

        '404.subtitle': 'The page that you requested could not be found',
        '404.go-home': 'Go home',
        '404.contact-us': 'Contact us',
    },

    vi: {
        'nav.home': 'Trang Chủ',
        'nav.shop': 'Sản Phẩm',
        'nav.blog': 'Tin Tức',
        'nav.about': 'Giới Thiệu',
        'nav.contact': 'Liên Hệ',

        'footer.copyright': `Bản quyền © ${currentYear} QuynhBio. Mọi quyền được bảo lưu.`,
        'footer.sitemap': 'Sơ đồ Website',
        'footer.privacy': 'Quyền riêng tư',
        'footer.terms': 'Điều khoản sử dụng',

        'home.hero.title.firstHalf': 'Trở nên',
        'home.hero.title.beautiful': 'xinh đẹp',
        'home.hero.title.preBreak': 'hơn',
        'home.hero.title.secondHalf': 'với Quỳnh Bio',
        'home.hero.subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat.',
        'home.hero.shop-now': 'Mua Hàng Ngay',
        'home.hero.contact-us': 'Liên hệ với chúng tôi',
        'home.featured-products': 'Sản Phẩm Nổi Bật',
        'home.faqs': 'Câu Hỏi Thường Gặp',

        'contact.title': 'Thông Tin Liên Lạc',
        'contact.subtitle': 'Bạn có vấn đề hoặc câu hỏi gì sao? Hãy liên hệ với chúng tôi.',
        'contact.methods': 'Phương Thức Liên Lạc',
        'contact.phone': 'Điện Thoại',
        'contact.messenger': 'Messenger',
        'contact.officeAddress': 'Địa Chỉ Văn Phòng',
        'contact.toggleMapTheme': 'Chuyển Màu Sắc Bản Đồ',
        'contact.toggleMapThemeHint': 'Ấn nút này nếu bạn xem bản đồ ở chế độ vệ tinh',

        '404.subtitle': 'Nội dung bạn đang cố truy cập không tồn tại trên website',
        '404.go-home': 'Quay trở lại trang chủ',
        '404.contact-us': 'Liên hệ với chúng tôi',
    },
} as const;
