'use client';

import React, { useState } from 'react';
import { Modal } from 'antd';

import { Button } from 'antd';
import { Descriptions } from 'antd';

export default function card() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Descriptions title="Cartão">
          <Descriptions.Item label="Nome">Cartão 1</Descriptions.Item>
          <Descriptions.Item label="etapa">feito</Descriptions.Item>
          <hr />

          <Descriptions.Item label="descrição">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, ChinaNo.
            18, Wantang Road, Xihu District, Hangzhou, Zhejiang, ChinaNo. 18,
            Wantang Road, Xihu District, Hangzhou, Zhejiang, ChinaNo. 18,
            Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
}
