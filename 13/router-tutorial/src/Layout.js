import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  //  Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야하는 상황에 사용
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    // replace 옵션을 사용하면 페이지를 이동할 때 현재 페이지를 페이지 기록에 남기지 않습니다.
    navigate('/articles', {
      replace: true,
    });
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
