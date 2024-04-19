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
    },

    vi: {
        'nav.home': 'Trang Chủ',
        'nav.shop': 'Sản Phẩm',
        'nav.blog': 'Tin Tức',
        'nav.about': 'Giới Thiệu',
        'nav.contact': 'Liên Hệ',

        'footer.copyright': `Bản quyền © ${currentYear} QuynhBio. Mọi quyền được bảo lưu.`,
        'footer.sitemap': 'Sơ đồ Website',
        'footer.privacy': 'Chính sách quyền riêng tư',
        'footer.terms': 'Điều khoản sử dụng',
    },
} as const;
