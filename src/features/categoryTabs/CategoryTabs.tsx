import { Tabs } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import style from './CategoryTabs.module.css';

export default function CategoryTabs () {
    const navigate = useNavigate();
    const { category } = useParams();

    const activeTab = category || 'all-categories';


    const handleTabChange = (value: string | null) => {
        if (!value) return;
        
        navigate(`/products/${value}`);

    }


    return (
        <Tabs defaultValue="moscow" mb={30} 
            classNames={{ tab: style.tab}}
            value={activeTab}
            onChange={handleTabChange}
        >
            <Tabs.List>
                <Tabs.Tab value="all-categories">All categories</Tabs.Tab>
                <Tabs.Tab value="vegetables">Vegetables</Tabs.Tab>
                <Tabs.Tab value="fruits">Fruits</Tabs.Tab>
                <Tabs.Tab value="nuts">Nuts</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    )
}