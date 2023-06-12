import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/* index 라는 props는 path="/"와 동일한 의미를 가진다. */}
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/* 경로에 : 를 사용하여 url 파라미터 설정 */}
                <Route path="/profiles/:username" element={<Profile/>}/>
            </Route>
            <Route path="/articles" element={<Articles/>}>
                <Route path=":id" element={<Article/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            {/*
                *는 wildcard. 아무 텍스트나 매칭한다는 뜻.
                규칙에 일치하는 라우트가 없다면 이 라우트가 화면에 나타난다.
            */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default App;
