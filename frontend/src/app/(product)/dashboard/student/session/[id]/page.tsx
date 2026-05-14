import LiveSessionClient from '@/pages/student/liveSession/liveSessionClient';

const Session = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <LiveSessionClient id={id} />;
};

export default Session;
