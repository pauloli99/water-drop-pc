import { useCourses } from '@/services/course';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import React from 'react';
import { DEFAULT_PAGE_SIZE } from '@/utils/constants';
import { COLUMNS } from './constants';

const Course = () => {
  const { refetch } = useCourses();

  return (
    <PageContainer header={{ title: '当前门店下开设的课程' }}>
      <ProTable
        columns={COLUMNS}
        pagination={{
          pageSize: DEFAULT_PAGE_SIZE,
        }}
        request={refetch}
      />
    </PageContainer>
  );
};

export default Course;
