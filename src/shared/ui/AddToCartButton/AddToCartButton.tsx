// shared/ui/AddToCartButton/AddToCartButton.tsx
import { Button } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

interface AddToCartButtonProps {
    onClick: () => void;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    leftSection?: React.ReactNode;
}

export default function AddToCartButton({ 
    onClick, 
    size = 'md',
    fullWidth = false,
    leftSection
}: AddToCartButtonProps) {
    return (
        <Button
            size={size}
            onClick={onClick}
            color="blue"
            variant="filled"
            fullWidth={fullWidth}
            leftSection={leftSection || <IconShoppingCart size={20} />}
            radius="md"
            styles={(theme) => ({
                root: {
                    background: 'linear-gradient(90deg, #4263EB 0%, #7048E8 100%)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows.md,
                    }
                }
            })}
        >
            Add to Cart
        </Button>
    );
}