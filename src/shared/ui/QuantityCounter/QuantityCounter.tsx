// shared/ui/QuantityCounter/QuantityCounter.tsx
import { Group, ActionIcon, Text } from '@mantine/core';
import { IconMinus, IconPlus } from '@tabler/icons-react';

interface QuantityCounterProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function QuantityCounter({ 
    quantity, 
    onIncrement, 
    onDecrement,
    size = 'md' 
}: QuantityCounterProps) {
    const iconSize = {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 28
    }[size];
    
    const textSize = {
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl'
    }[size];
    
    return (
        <Group gap={10}>
            <ActionIcon 
                size={size} 
                variant="light" 
                color="gray"
                onClick={onDecrement}
                disabled={quantity <= 1}
            >
                <IconMinus size={iconSize} />
            </ActionIcon>
            
            <Text fw={700} size={textSize} w={20} ta="center">
                {quantity}
            </Text>
            
            <ActionIcon 
                size={size} 
                variant="light" 
                color="blue"
                onClick={onIncrement}
            >
                <IconPlus size={iconSize} />
            </ActionIcon>
        </Group>
    );
}