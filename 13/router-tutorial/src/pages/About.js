import {useSearchParams} from 'react-router-dom';

const About = () => {
    /*

        6버전부터 useSearchParams로 쿼리스트링을 쉽게 다룰 수 있다.
        key 와 value 를 파싱하는 과정 생략.
        (기존에는 useLocation() 써서 파싱 직접 했음)

        * 파라미터는 객체 형태로 반환
        searchParams 첫번째 => 쿼리 파라미터를 조회하거나 수정하는 메서드가 담긴 객체. set / get
        setSearchParams 두번째 => 객체형태로 파라미터 업데이트

        ** 주의할 점
        조회할 때 값은 무조건 문자열 타임이라는 점.
        ture/false 도 'true' 로 넣어 비교해야하고
        꺼내쓸때는 숫자의 경우 parseInt로 변환해야한다!

    */
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        searchParams.set('detail', detail === 'true' ? false : true);
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({mode: nextMode, detail});
    };

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;
