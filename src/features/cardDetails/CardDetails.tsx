import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../redux/hooks/redux';
import type { RootState } from '../../redux/store/store';
import { 
    Container, 
    Image, 
    Text, 
    Flex, 
    Box, 
    Title, 
    Divider,
    Paper,
    Badge,
    Group,
    Rating,
    Breadcrumbs,
    Anchor,
    Button
} from '@mantine/core';
import { 
    IconShoppingCart, 
    IconPackage, 
    IconCategory, 
    IconCurrencyDollar,
    IconStar,
    IconTruck,
    IconShieldCheck
} from '@tabler/icons-react';
import style from './CardDetails.module.css';
import QuantityCounter from '../../shared/ui/QuantityCounter/QuantityCounter';
import AddToCartButton from '../../shared/ui/AddToCartButton/AddToCartButton';
import { useProductQuantity } from '../../shared/hooks/useProductQuantity';
import { formatProductName, formatCategoryName } from '../../shared/utils/formatHelpers';

export default function CardDetails() {
    const { name } = useParams<{ name: string }>();
    const { products } = useTypedSelector((state: RootState) => state.product);
    
    const searchName = name?.replace(/-/g, ' ').toLowerCase().trim();
    
    const product = products.find(p => {
        const [productNamePart] = p.name.split(' - ');
        return productNamePart.toLowerCase().trim() === searchName;
    });

    const { quantity, handleIncrement, handleDecrement, handleAddToCart } = 
        useProductQuantity(product);

    if (!product) {
        return (
            <Container size="lg" py={100}>
                <Paper p={50} radius="lg" withBorder>
                    <Flex direction="column" align="center" justify="center" gap="md">
                        <Text size="xl" fw={600} c="dimmed">Product not found</Text>
                        <Text c="gray">The product you're looking for doesn't exist or has been removed.</Text>
                    </Flex>
                </Paper>
            </Container>
        );
    }

    const { name: productName, weight } = formatProductName(product.name);
    const formattedCategory = formatCategoryName(product.category);

    const items = [
        { title: 'Home', href: '/' },
        { title: 'Catalog', href: '/' },
        { title: formattedCategory, href: `/shop/products/${product.category}` },
        { title: productName },
    ].map((item, index) => (
        <Anchor href={item.href} key={index} c="dimmed" size="sm">
            {item.title}
        </Anchor>
    ));

    return (
        <Container size="xl" py={80}>
            {/* Breadcrumbs */}
            <Breadcrumbs separator="→" mb={30}>
                {items}
            </Breadcrumbs>

            <Paper 
                radius="xl" 
                p={40} 
                withBorder 
                shadow="sm"
                className={style.paperContainer}
            >
                <Flex gap={50} align="flex-start">
                    {/* Product Image Section */}
                    <Box className={style.imageContainer}>
                        <Image
                            src={product.image}
                            radius="lg"
                            className={style.productImage}
                            alt={product.name}
                            
                        />
                        <Group mt={20} justify="center" gap="xs">
                            <Badge 
                                size="lg" 
                                color="teal" 
                                variant="light"
                                leftSection={<IconShieldCheck size={16} />}
                            >
                                In Stock
                            </Badge>
                            <Badge 
                                size="lg" 
                                color="blue" 
                                variant="light"
                                leftSection={<IconTruck size={16} />}
                            >
                                Free Shipping
                            </Badge>
                        </Group>
                    </Box>
                    
                    {/* Vertical Divider */}
                    <Divider 
                        orientation="vertical" 
                        color="gray.2"
                        size="sm"
                    />
                    
                    {/* Product Details Section */}
                    <Box flex={1} pt={10}>
                        <Group mb={15}>
                            <Badge 
                                size="xl" 
                                color="indigo" 
                                radius="sm"
                                variant="filled"
                            >
                                {formattedCategory}
                            </Badge>
                            <Rating value={4.5} fractions={2} readOnly />
                            <Text size="sm" c="dimmed">(128 reviews)</Text>
                        </Group>
                        
                        <Title order={1} size={42} mb={10} className={style.productTitle}>
                            {productName}
                        </Title>
                        
                        <Text size="xl" c="dimmed" mb={25}>
                            Fresh organic {productName.toLowerCase()} delivered directly from farm
                        </Text>
                        
                        {/* Price Section */}
                        <Paper withBorder p={20} radius="md" mb={30} className={style.priceCard}>
                            <Flex align="center" justify="space-between">
                                <Box>
                                    <Text size="sm" c="dimmed" mb={5}>Total Price</Text>
                                    <Flex align="center" gap={10}>
                                        <IconCurrencyDollar size={32} color="#4263EB" />
                                        <Title order={2} c="#072542" className={style.price}>
                                            ${product.price.toFixed(2)}
                                        </Title>
                                        <Text size="md" c="dimmed" td="line-through">
                                            ${(product.price * 1.2).toFixed(2)}
                                        </Text>
                                        <Badge color="red" size="lg">-20%</Badge>
                                    </Flex>
                                </Box>
                                <Text size="sm" c="green">
                                    Save ${(product.price * 0.2).toFixed(2)} today!
                                </Text>
                            </Flex>
                        </Paper>
                        
                        {/* Product Details Grid */}
                        <Flex gap={30} mb={40}>
                            <Group gap={10}>
                                <IconPackage size={24} color="#4263EB" />
                                <Box>
                                    <Text size="sm" c="dimmed">Weight</Text>
                                    <Text fw={600} size="lg">{weight}</Text>
                                </Box>
                            </Group>
                            
                            <Group gap={10}>
                                <IconCategory size={24} color="#4263EB" />
                                <Box>
                                    <Text size="sm" c="dimmed">Category</Text>
                                    <Text fw={600} size="lg">{formattedCategory}</Text>
                                </Box>
                            </Group>
                            
                            <Group gap={10}>
                                <IconStar size={24} color="#4263EB" />
                                <Box>
                                    <Text size="sm" c="dimmed">Rating</Text>
                                    <Text fw={600} size="lg">4.5/5</Text>
                                </Box>
                            </Group>
                        </Flex>
                        

                        <Paper withBorder p={25} radius="lg" mb={30}>
                            <Title order={3} mb={20}>Select Quantity</Title>
                            <Flex align="center" justify="space-between">
                                <Box>
                                    <Text size="sm" c="dimmed" mb={10}>Items available: 245</Text>
                                    <QuantityCounter
                                        quantity={quantity}
                                        onIncrement={handleIncrement}
                                        onDecrement={handleDecrement}
                                        
                                    />
                                </Box>
                                <Box>
                                    <Text size="lg" fw={600} mb={10}>
                                        Subtotal: <span className={style.subtotal}>
                                            ${(product.price * quantity).toFixed(2)}
                                        </span>
                                    </Text>
                                    <Text size="sm" c="dimmed">
                                        ${product.price.toFixed(2)} × {quantity} items
                                    </Text>
                                </Box>
                            </Flex>
                        </Paper>
                        
                        {/* Action Buttons */}
                        <Flex gap={20}>
                            <AddToCartButton
                                onClick={handleAddToCart}
                                fullWidth
                                leftSection={<IconShoppingCart size={24} />}
                            />
                            <Button 
                                size="xl" 
                                variant="outline" 
                                color="gray"
                                fullWidth
                            >
                                Add to Wishlist
                            </Button>
                        </Flex>
                        
                        {/* Additional Info */}
                        <Group mt={40} gap={30}>
                            <Box>
                                <Text fw={600} mb={5}>✅ 100% Organic</Text>
                                <Text size="sm" c="dimmed">Certified organic produce</Text>
                            </Box>
                            <Box>
                                <Text fw={600} mb={5}>🚚 Free Delivery</Text>
                                <Text size="sm" c="dimmed">On orders over $50</Text>
                            </Box>
                            <Box>
                                <Text fw={600} mb={5}>↩️ Easy Returns</Text>
                                <Text size="sm" c="dimmed">30-day return policy</Text>
                            </Box>
                        </Group>
                    </Box>
                </Flex>
            </Paper>
        </Container>
    );
}
