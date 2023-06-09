import { useCourses } from '@/services/course';
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';
import { DEFAULT_PAGE_SIZE } from '@/utils/constants';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getColumns } from './constants';
import EditCourse from './components/EditCourse';
import OrderTime from './components/OrderTime';

const Course = () => {
  const actionRef = useRef<ActionType>();
  const [curId, setCurId] = useState('');
  const { refetch } = useCourses();
  const [showInfo, setShowInfo] = useState(false);
  const [showOrderTime, setShowOrderTime] = useState(false);

  const onClickAddHandler = (id?:string) => {
    if (id) {
      setCurId(id);
    } else {
      setCurId('');
    }
    setShowInfo(true);
  };

  const closeAndRefetchHandler = (isReload?:boolean) => {
    setShowInfo(false);
    if (isReload) {
      actionRef.current?.reload();
    }
  };

  const onOrderTimeHandler = (id: string) => {
    setCurId(id);
    setShowOrderTime(true);
  };

  return (
    <PageContainer header={{ title: '当前门店下开设的课程' }}>
      <ProTable
        rowKey="id"
        actionRef={actionRef}
        columns={getColumns({
          onEditHandler: onClickAddHandler,
          onOrderTimeHandler,
        })}
        pagination={{
          pageSize: DEFAULT_PAGE_SIZE,
        }}
        toolBarRender={() => [
          <Button key="add" onClick={() => onClickAddHandler()} type="primary" icon={<PlusOutlined />}>新建</Button>,
        ]}
        request={refetch}
      />
      {showInfo && <EditCourse id={curId} onClose={closeAndRefetchHandler} />}
      {showOrderTime && <OrderTime id={curId} onClose={() => setShowOrderTime(false)} />}
    </PageContainer>
  );
};

export default Course;
