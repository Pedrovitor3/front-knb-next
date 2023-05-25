'use client';

import React, { useEffect, useRef } from 'react';
import {
  InputRef,
  Form,
  message,
} from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import { Table } from 'antd';
import { Button, Card, Col, Row } from 'antd';
import { useState } from 'react';
import { deletePhase, getPhase } from '@/hooks/phaseService';

interface DataType {
  key: React.Key;
  id: string;
  name: string;
  demands: {
    name: string;
  };
}

type DataIndex = keyof DataType;

export default function Phase() {
  const searchInput = useRef<InputRef>(null);
  const [showModal, setShowModal] = useState(false);
  const [phase, setPhase] = useState([]);

  const [recordPhases, setRecordPhases] = useState<any>({});


  const columns: ColumnsType<DataType> = [
    {
      title: '',
      key: 'demands',
      dataIndex: 'demands',
      width: '20%',
      render: (demands) => (
        <Card title={demands ? demands.name : ''}/>
        
      ),
    },
    {
      title: 'Execução',
      key: 'name',
      dataIndex: 'name',
      width: '20%',
      render: (name) => (
        <Card title={name}/>
      ),
    },
    {
      title: 'Concluido',
      key: 'name',
      dataIndex: 'name',
      width: '20%',
      render: (demands) => (
        <Card title={demands ? demands.name : ''}/>
      ),
    },
    {
      title: 'Pendente',
      key: 'name',
      dataIndex: 'name',
      width: '20%',
      render: (demands) => (
        <Card title={demands ? demands.name : ''}/>
      ),
    },
    {
      title: 'Recusado',
      key: 'name',
      dataIndex: 'name',
      width: '20%',
      render: (demands) => (
        <Card title={demands ? demands.name : ''}/>
      ),
    },
  ];


  useEffect(() => {
    setShowModal(false);
    loadingPhase();
  }, []);

  useEffect(() => {
    loadingPhase();
  }, [phase]);

  async function loadingPhase() {
    const response = await getPhase('phase');
    console.log(response);
    if (response !== false) {
      setPhase(response.data);
    } else {
      message.error( 'Ocorreu um erro inesperado ao obter as demandas.');
    }
  }
  // Exclusão de servidor
  const ClickDeletePhase = async (record: any) => {
    await deletePhase(recordPhases);
    const newPhases = [...phase];
    newPhases.splice(record, -1);
    setPhase(newPhases);
    loadingPhase();
  };

  

  return (
    <>
      <Row style={{ paddingBottom: 'inherit', display: 'flow-root' }}>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ float: 'right', width: 'auto' }}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Criar novo objeto
          </Button>
        </Form.Item>
      </Row>
      <Table
        columns={columns}
        expandable={{
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        rowKey="id"
        dataSource={phase}
      />
    </>
  );
}
