import { useEffect, useState } from "react";
import { Container, Title, Grid, Flex, Loader, Pagination, Group, Text } from '@mantine/core';
import Card from "../../features/card/Card";
import type { RootState } from "../../redux/store/store";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/redux";
import { fetchProducts } from "../../redux/slices/ProductsSlice";
import CategoryTabs from "../../features/categoryTabs/CategoryTabs";
import { useParams } from "react-router";



export default function Catalog () {
  const { category = 'all-categories' } = useParams();
  const { products, loading, error } = useTypedSelector((state: RootState) => state.product);
  const dispatch = useTypedDispatch();
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    dispatch(fetchProducts())

  }, [dispatch]);

  useEffect(() => {
    setActivePage(1);
  }, [category]);

  
  const filteredProducts = () => {
    if (category === 'all-categories') {
      return products
    }

    return products.filter(product => 
      product.category?.toLowerCase() === category.toLowerCase()
    )
  }

  const allProducts = filteredProducts();
  
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayProducts = allProducts.slice(startIndex, endIndex);

  
  const isEmptyPage = displayProducts.length === 0;


  if (loading) {
    return (
    <Container size="1440px" bg='#F3F5FA' p={80} style={{ height: '100vh'}}>
      <Flex justify="center" align="center" h={'100%'} w={'100wh'}>
          <Loader size="lg" />
      </Flex>
    </Container>
    )
  }

  if(error) return <div>Error: {error}</div>


  return (
    <Container size={'1440px'} px={80} py={60}>

      <Title c='#000000' size={32} fw={600} mb={45}>
        Catalog
      </Title>

      <CategoryTabs />

      {isEmptyPage ? (
        <Flex 
          justify="center" 
          align="center" 
          h={300}
          direction="column"
          gap="md"
        >
          <Text size="xl" fw={500} c="dimmed">
            No products found on this page
          </Text>
          <Text size="md" c="gray">
            Try selecting a different page or category
          </Text>
        </Flex>

      ) : (
      <Grid gutter={'xl'}>
          {displayProducts.map((product) => (
            <Grid.Col key={product.id} span={3}>
              <Card product={product} />
            </Grid.Col>
          ))}
      </Grid>

     )}


     {totalPages > 1 && (
      <Flex justify={'center'} align={'center'} mt={80}>
        <Pagination.Root 
            total={totalPages}
            color={'#54B46A'}
            value={activePage}
            onChange={setActivePage}
        >
            <Group gap={5} justify="center">
                <Pagination.First />
                <Pagination.Previous />
                <Pagination.Items />
                <Pagination.Next />
                <Pagination.Last />
            </Group>
        </Pagination.Root>
      </Flex>
    )}

      </Container>

  );
    
}