export const languages = {
    en: 'English',
    vi: 'Tiếng Việt',
};

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
        'home.hero.contact-us': 'Liên Hệ Với Chúng Tôi',
        'home.featured-products': 'Sản Phẩm Nổi Bật',
        'home.faqs': 'Câu Hỏi Thường Gặp',
    },
} as const;
