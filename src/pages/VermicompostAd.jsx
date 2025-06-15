import React from "react";
import { Card, Row, Col, Typography, List, Button, Divider, Tag } from "antd";
import { CheckCircleOutlined, ShoppingCartOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const features = [
    "Pure & Organic – Made from natural farm waste and earthworms.",
    "Improves Soil Health – Enhances aeration, water retention & microbial activity.",
    "Boosts Plant Growth – Provides a balanced mix of NPK and micronutrients.",
    "Odor-Free & Easy to Use – Suitable for indoor plants, pots, lawns & crops.",
];

const applications = [
    "Kitchen gardens & terrace farming",
    "Organic vegetable and flower cultivation",
    "Large-scale farms & plantations",
    "Nursery and landscaping projects",
];

const VermicompostAd = () => {
    return (
        <Card style={{ margin: 20, borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
            <Title level={2} style={{ color: "#4CAF50" }}>🌿 100% Organic Vermicompost</Title>
            <Paragraph strong>
                <Text>Revive your soil, naturally.</Text> PushpRatn Organics brings you premium quality <strong>vermicompost</strong>,
                enriched with essential nutrients and beneficial microbes—perfect for home gardens, farms, and nurseries.
            </Paragraph>

            <Divider orientation="left">💚 Why Choose Our Vermicompost?</Divider>
            <List
                size="small"
                dataSource={features}
                renderItem={(item) => (
                    <List.Item>
                        <CheckCircleOutlined style={{ color: "#52c41a", marginRight: 8 }} />
                        {item}
                    </List.Item>
                )}
            />

            <Divider orientation="left">🪱 What is Vermicompost?</Divider>
            <Paragraph>
                Vermicompost is a nutrient-rich organic fertilizer created by <strong>earthworms</strong> as they break down
                biodegradable waste. It's a <Text strong>natural soil conditioner</Text> that promotes sustainable agriculture
                and eliminates the need for chemical fertilizers.
            </Paragraph>

            <Divider orientation="left">🌱 Ideal For:</Divider>
            <List
                size="small"
                dataSource={applications}
                renderItem={(item) => (
                    <List.Item>
                        <InfoCircleOutlined style={{ color: "#1890ff", marginRight: 8 }} />
                        {item}
                    </List.Item>
                )}
            />

            <Divider orientation="left">🚛 Available in:</Divider>
            <div style={{ marginBottom: 20 }}>
                <Tag color="green">1kg</Tag>
                <Tag color="green">5kg</Tag>
                <Tag color="green">10kg</Tag>
                <Tag color="green">Bulk Orders</Tag>
            </div>

            <Row justify="center">
                <Button type="primary" icon={<ShoppingCartOutlined />} size="large" disabled={true}>
                    Order Now
                </Button>
            </Row>
        </Card>
    );
};

export default VermicompostAd;
