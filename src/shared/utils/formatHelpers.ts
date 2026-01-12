
export const formatProductName = (productName: string) => {
    const [namePart, weightPart] = productName.split(' - ');
    return {
        name: namePart?.trim() || '',
        weight: weightPart?.replace(/\bKg\b/g, 'kg').trim() || '',
    };
};

export const formatCategoryName = (category: string) => {
    if (!category) return '';
    return category
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const createProductSlug = (productName: string) => {
    const [namePart] = productName.split(' - ');
    return namePart
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
};