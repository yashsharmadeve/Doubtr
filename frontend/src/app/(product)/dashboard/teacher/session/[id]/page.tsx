import LiveSessionClient from '@/page/teacher/liveSession/liveSessionClient';

const SessionPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <LiveSessionClient id={id} />;
};

export default SessionPage;
