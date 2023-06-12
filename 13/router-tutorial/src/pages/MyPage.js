import { Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    /*
      컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동을 하고 싶을 때 사용한다. (리다이랙트)
    */
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;
