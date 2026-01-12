import { Container, Grid, Text, Flex, Group, Stack, Divider, Button, TextInput } from "@mantine/core";
import { 
    IconBrandFacebook, 
    IconBrandTwitter, 
    IconBrandInstagram, 
    IconBrandLinkedin, 
    IconBrandYoutube,
    IconMail,
    IconPhone,
    IconMapPin,
    IconHeart,
    IconChevronRight
} from '@tabler/icons-react';
import style from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={style.footer}>
            <Container size="xl" className={style.footerContainer}>
                <Grid gutter={50} mb={40}>
                    <Grid.Col span={{ base: 12, md: 3 }}>
                        <Stack gap="md">
                            <Text fz={28} fw={700} className={style.logo}>
                                .FrontEnd<span className={style.logoDot}>.</span>
                            </Text>
                            <Text c="dimmed" fz="sm">
                                We provide the best quality products with fast delivery and excellent customer service.
                            </Text>
                            <Group mt={10}>
                                <Button 
                                    variant="subtle" 
                                    color="gray" 
                                    size="sm" 
                                    leftSection={<IconBrandFacebook size={18} />}
                                    className={style.socialButton}
                                />
                                <Button 
                                    variant="subtle" 
                                    color="gray" 
                                    size="sm" 
                                    leftSection={<IconBrandTwitter size={18} />}
                                    className={style.socialButton}
                                />
                                <Button 
                                    variant="subtle" 
                                    color="gray" 
                                    size="sm" 
                                    leftSection={<IconBrandInstagram size={18} />}
                                    className={style.socialButton}
                                />
                                <Button 
                                    variant="subtle" 
                                    color="gray" 
                                    size="sm" 
                                    leftSection={<IconBrandLinkedin size={18} />}
                                    className={style.socialButton}
                                />
                                <Button 
                                    variant="subtle" 
                                    color="gray" 
                                    size="sm" 
                                    leftSection={<IconBrandYoutube size={18} />}
                                    className={style.socialButton}
                                />
                            </Group>
                        </Stack>
                    </Grid.Col>


                    <Grid.Col span={{ base: 6, md: 2 }}>
                        <Stack gap="md">
                            <Text fz="lg" fw={600} className={style.sectionTitle}>
                                Shop
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                All Products
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                Vegetables
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                Fruits
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                Nuts
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                New Arrivals
                            </Text>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 6, md: 2 }}>
                        <Stack gap="md">
                            <Text fz="lg" fw={600} className={style.sectionTitle}>
                                Support
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                Contact Us
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                FAQ
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                Shipping Policy
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                Returns & Refunds
                            </Text>
                            <Text component="a" href="#" className={style.footerLink}>
                                Privacy Policy
                            </Text>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 3 }}>
                        <Stack gap="md">
                            <Text fz="lg" fw={600} className={style.sectionTitle}>
                                Contact Info
                            </Text>
                            <Group gap="sm">
                                <IconMapPin size={18} className={style.contactIcon} />
                                <Text fz="sm">123 Green Street, Organic City</Text>
                            </Group>
                            <Group gap="sm">
                                <IconPhone size={18} className={style.contactIcon} />
                                <Text fz="sm">+1 (555) 123-4567</Text>
                            </Group>
                            <Group gap="sm">
                                <IconMail size={18} className={style.contactIcon} />
                                <Text fz="sm">support@frontendstore.com</Text>
                            </Group>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 2 }}>
                        <Stack gap="md">
                            <Text fz="lg" fw={600} className={style.sectionTitle}>
                                Newsletter
                            </Text>
                            <Text fz="sm" c="dimmed">
                                Subscribe to get updates on new products and special offers!
                            </Text>
                            <TextInput
                                placeholder="Your email"
                                rightSection={
                                    <Button 
                                        size="xs" 
                                        variant="light" 
                                        mr={5}
                                        className={style.subscribeButton}
                                    >
                                        <IconChevronRight size={16} />
                                    </Button>
                                }
                                className={style.newsletterInput}
                            />
                        </Stack>
                    </Grid.Col>
                </Grid>

                <Divider color="gray.3" mb={30} />

                <Flex 
                    direction={{ base: 'column', sm: 'row' }} 
                    justify="space-between" 
                    align="center"
                    gap="md"
                >
                    <Text fz="sm" c="dimmed">
                        © {currentYear} .FrontEnd Store. All rights reserved.
                    </Text>
                    
                    <Group gap="md">
                        <Text component="a" href="#" fz="sm" className={style.bottomLink}>
                            Terms of Service
                        </Text>
                        <Text component="a" href="#" fz="sm" className={style.bottomLink}>
                            Privacy Policy
                        </Text>
                        <Text component="a" href="#" fz="sm" className={style.bottomLink}>
                            Cookies
                        </Text>
                    </Group>
                    
                    <Text fz="sm" c="dimmed" className={style.madeWithLove}>
                        Made with <IconHeart size={14} color="red" /> by FrontEnd Team
                    </Text>
                </Flex>
            </Container>
        </footer>
    );
}