'use client';

import { Button, Card, Space } from 'antd';
import Link from 'next/link';
import React from 'react';
require('./index.css');

export default function openDemanda() {
  return (
    <>
      <div>
        <Button style={{ marginBottom: '15px' }}>Criar novo cartão</Button>
      </div>
      <Space direction="horizontal" style={{ fontSize: 16 }}>
        <div>
          <Space size={16} style={{ marginRight: '10px' }}>
            <Card title="To do" style={{ width: 300, textAlign: 'center' }}>
              <Link href="/card">
                <Card type="inner" title="Card 1" />
              </Link>
              <Card style={{ marginTop: 16 }} type="inner" title="Card 2" />
              <Card style={{ marginTop: 16 }} type="inner" title="Card 3" />
            </Card>
          </Space>
        </div>
        <div>
          <Space size={16} style={{ marginRight: '10px' }}>
            <Card title="Doing" style={{ width: 300, textAlign: 'center' }}>
              <Card type="inner" title="Card 4" />
              <Card style={{ marginTop: 16 }} type="inner" title="Card 5" />
              <Card style={{ marginTop: 16 }} type="inner" title="Card 6" />
            </Card>
          </Space>
        </div>
        <div>
          <Space size={16} style={{ marginRight: '10px' }}>
            <Card title="Done" style={{ width: 300, textAlign: 'center' }}>
              <Card type="inner" title="Card 7" />
              <Card style={{ marginTop: 16 }} type="inner" title="Card 8" />
              <Card style={{ marginTop: 16 }} type="inner" title="Card 9" />
            </Card>
          </Space>
        </div>
        <div>
          <Space size={16} style={{ marginRight: '10px' }}>
            <Card title="Aproved" style={{ width: 300, textAlign: 'center' }}>
              <Card type="inner" title="Card 7" />
              <Card style={{ marginTop: 16 }} type="inner" title="Card 8" />
              <Card style={{ marginTop: 16 }} type="inner" title="Card 9" />
            </Card>
          </Space>
        </div>
      </Space>
    </>
  );
}
