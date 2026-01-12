import { Group, Text, Button, Flex, Container, Badge, Avatar, Box } from '@mantine/core';
import { 
    IconShoppingCart, 
    IconUser, 
    IconHeart, 
    IconSearch,
    IconChevronDown,
    IconLeaf,
    IconStar,
    IconTruck
} from '@tabler/icons-react';
import { useTypedSelector } from "../../redux/hooks/redux";
import { type RootState } from "../../redux/store/store";
import style from './Header.module.css';

type HeaderType = {
    onClick: () => void
}

export default function Header({ onClick }: HeaderType) {
  const totalCount = useTypedSelector((state: RootState) => state.cart.totalCount)
  const userLoggedIn = true; 

    return (
        <header className={style.header}>
            {/* Top Bar */}
            <div className={style.topBar}>
                <Container size="xl" className={style.topBarContainer}>
                    <Flex justify="space-between" align="center">
                        <Group gap={30}>
                            <Group gap={6}>
                                <IconTruck size={16} />
                                <Text size="sm">Free shipping on orders over $50</Text>
                            </Group>
                            <Group gap={6}>
                                <IconStar size={16} />
                                <Text size="sm">100% Organic Quality</Text>
                            </Group>
                        </Group>
                        
                        <Group gap={20}>
                            <Text size="sm" className={style.topLink}>Help Center</Text>
                            <Text size="sm" className={style.topLink}>Track Order</Text>
                            <Text size="sm" className={style.topLink}>
                                {userLoggedIn ? 'My Account' : 'Sign In / Register'}
                            </Text>
                        </Group>
                    </Flex>
                </Container>
            </div>

            <Container size="xxl" className={style.mainContainer}>
                <Flex justify="space-between" align="center" py={20}>
                    <Group gap={10} className={style.logoSection}>
                        <IconLeaf size={32} color="#54B46A" />
                        <Box>
                            <Text size='28px' fw={700} className={style.logoText}>
                                Fresh<span className={style.logoHighlight}>Market</span>
                            </Text>
                            <Text size="xs" c="dimmed" className={style.tagline}>
                                Organic groceries delivered
                            </Text>
                        </Box>
                    </Group>

                    <div className={style.searchContainer}>
                        <Group className={style.searchWrapper} gap={0}>
                            <input 
                                type="text" 
                                placeholder="Search for vegetables, fruits, nuts..." 
                                className={style.searchInput}
                            />
                            <Button 
                                className={style.searchButton}
                                leftSection={<IconSearch size={20} />}
                            >
                                Search
                            </Button>
                        </Group>
                    </div>

                    <Group gap={25}>
                        <Button 
                            variant="subtle" 
                            color="gray"
                            className={style.actionButton}
                            leftSection={<IconHeart size={22} />}
                        >
                            Wishlist
                        </Button>
                        
                        <div className={style.cartContainer}>
                            <Button 
                                variant="subtle" 
                                color="gray"
                                className={style.actionButton}
                                onClick={onClick}
                                leftSection={<IconShoppingCart size={22} />}
                                w={120}
                            >
                                Cart
                                {totalCount > 0 && (
                                    <Badge 
                                        size="sm" 
                                        circle 
                                        className={style.cartBadge}
                                    >
                                        {totalCount}
                                    </Badge>
                                )}
                            </Button>
                        </div>
                        
                        <Avatar 
                            size={42} 
                            radius="xl" 
                            color="green"
                            className={style.avatar}
                        >
                            <IconUser size={22} />
                        </Avatar>
                    </Group>
                </Flex>

                <nav className={style.navigation}>
                    <Group gap={0} className={style.navList}>
                        <Button 
                            variant="subtle" 
                            className={style.navItem}
                            rightSection={<IconChevronDown size={16} />}
                        >
                            All Categories
                        </Button>
                        
                        <Button 
                            variant="subtle" 
                            className={`${style.navItem} ${style.navItemActive}`}
                        >
                            Vegetables
                        </Button>
                        
                        <Button variant="subtle" className={style.navItem}>
                            Fruits
                        </Button>
                        
                        <Button variant="subtle" className={style.navItem}>
                            Nuts
                        </Button>
                        
                        <Button variant="subtle" className={style.navItem}>
                            Dairy
                        </Button>
                        
                        <Button variant="subtle" className={style.navItem}>
                            Bakery
                        </Button>
                        
                        <Button variant="subtle" className={style.navItem}>
                            Deals
                            <Badge size="xs" color="red" ml={5}>HOT</Badge>
                        </Button>
                    </Group>
                    
                    <Text size="sm" c="dimmed" className={style.contactInfo}>
                        Need help? Call us: <span className={style.phoneNumber}>(555) 123-4567</span>
                    </Text>
                </nav>
            </Container>

        </header>
    );
}