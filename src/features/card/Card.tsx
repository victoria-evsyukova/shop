// features/card/Card.tsx
import { Card as MantineCard, Image, Text, Flex } from '@mantine/core';
import style from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import { type Product } from '../../types';
import QuantityCounter from '../../shared/ui/QuantityCounter/QuantityCounter';
import AddToCartButton from '../../shared/ui/AddToCartButton/AddToCartButton';
import { useProductQuantity } from '../../shared/hooks/useProductQuantity';
import { formatProductName, createProductSlug } from '../../shared/utils/formatHelpers';

interface CardProps {
    product: Product;
}

export default function Card({ product }: CardProps) {
    const navigate = useNavigate();
    const { name, weight } = formatProductName(product.name);
    const categoryProduct = product.category;
    
    const { quantity, handleIncrement, handleDecrement, handleAddToCart } = 
        useProductQuantity(product);

    const handleCardClick = () => {
        const slug = createProductSlug(product.name);
        navigate(`/products/${categoryProduct}/${slug}`);
    };

    return (
        <MantineCard p={20} radius="md">
            <Image
                src={product.image}
                alt={product.name}
                width={276}
                height={276}
                className={style['img']}
                onClick={handleCardClick}
            />

            <Flex justify="space-between" direction="row" mt={16}>
                <Flex justify="center" align="center">
                    <Text size="18px" fw={600} pr={10}>
                        {name}
                    </Text>
                    <Text size="13px" fw={600} c="#868E96" ff="Open Sans">
                        {weight}
                    </Text>
                </Flex>

                <QuantityCounter
                    quantity={quantity}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            </Flex>

            <Flex justify="space-between" align="center" mt={16}>
                <Text size="20px" fw={600}>
                    ${product.price * quantity}
                </Text>

                <AddToCartButton
                  onClick={handleAddToCart}
                />
            </Flex>
        </MantineCard>
    );
}