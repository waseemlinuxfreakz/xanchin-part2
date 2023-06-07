import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Star from '../../assets/img/new/star.svg';

function Resultpage() {
    return ( 
        <div className="PageWraper ResultPageWrape pt-5">
            <Header/>
            <div className="container">
                <div className="resultContainer">
                    <div className="resultTop">
                        <p className='starNumber'><img src={Star} alt="Star" /> <span>15</span> is the star number</p>
                        <div className="select_box">
                            <select name="" id="">
                                <option value="08 may 2023">08 may 2023</option>
                                <option value="08 may 2023">08 may 2023</option>
                                <option value="08 may 2023">08 may 2023</option>
                            </select>
                            {/* <img src={} alt="" className="selectIcon" /> */}
                        </div>
                    </div>    
                    <div className="result_number">
                        <button type='button' className="resultNumberItem">00</button>
                        <button type='button' className="resultNumberItem">01</button>
                        <button type='button' className="resultNumberItem">02</button>
                        <button type='button' className="resultNumberItem active">03 <span>2</span></button>
                        <button type='button' className="resultNumberItem">04</button>
                        <button type='button' className="resultNumberItem">05 <span>10</span></button>
                        <button type='button' className="resultNumberItem">06</button>
                        <button type='button' className="resultNumberItem active">07</button>
                        <button type='button' className="resultNumberItem">08</button>
                        <button type='button' className="resultNumberItem">09</button>
                        <button type='button' className="resultNumberItem active">10</button>
                        <button type='button' className="resultNumberItem active">11</button>
                        <button type='button' className="resultNumberItem">12</button>
                        <button type='button' className="resultNumberItem">13</button>
                        <button type='button' className="resultNumberItem">14</button>
                        <button type='button' className="resultNumberItem activeWiner">15</button>
                        <button type='button' className="resultNumberItem">16</button>
                        <button type='button' className="resultNumberItem">17</button>
                        <button type='button' className="resultNumberItem active">18</button>
                        <button type='button' className="resultNumberItem">19</button>
                        <button type='button' className="resultNumberItem">20</button>
                        <button type='button' className="resultNumberItem">21</button>
                        <button type='button' className="resultNumberItem active">22</button>
                        <button type='button' className="resultNumberItem">23</button>
                        <button type='button' className="resultNumberItem active">24</button>
                        <button type='button' className="resultNumberItem">25</button>
                        <button type='button' className="resultNumberItem">26</button>
                        <button type='button' className="resultNumberItem active">27 <span>3</span></button>
                        <button type='button' className="resultNumberItem">28</button>
                        <button type='button' className="resultNumberItem active">29</button>
                        <button type='button' className="resultNumberItem">30</button>
                        <button type='button' className="resultNumberItem">31</button>
                        <button type='button' className="resultNumberItem">32</button>
                        <button type='button' className="resultNumberItem">33</button>
                        <button type='button' className="resultNumberItem active">34</button>
                        <button type='button' className="resultNumberItem">35</button>
                        <button type='button' className="resultNumberItem">36</button>
                        <button type='button' className="resultNumberItem">37</button>
                        <button type='button' className="resultNumberItem">38</button>
                        <button type='button' className="resultNumberItem">39</button>
                        <button type='button' className="resultNumberItem active">40</button>
                        <button type='button' className="resultNumberItem">41</button>
                        <button type='button' className="resultNumberItem active">42</button>
                        <button type='button' className="resultNumberItem">43</button>
                        <button type='button' className="resultNumberItem">44</button>
                        <button type='button' className="resultNumberItem active">45</button>
                        <button type='button' className="resultNumberItem">46</button>
                        <button type='button' className="resultNumberItem">47</button>
                        <button type='button' className="resultNumberItem active">48</button>
                        <button type='button' className="resultNumberItem">49</button>
                        <button type='button' className="resultNumberItem">50</button>
                        <button type='button' className="resultNumberItem">51</button>
                        <button type='button' className="resultNumberItem">52</button>
                        <button type='button' className="resultNumberItem">53</button>
                        <button type='button' className="resultNumberItem">54</button>
                        <button type='button' className="resultNumberItem">55</button>
                        <button type='button' className="resultNumberItem">56</button>
                        <button type='button' className="resultNumberItem">57</button>
                        <button type='button' className="resultNumberItem">58</button>
                        <button type='button' className="resultNumberItem">59</button>
                        <button type='button' className="resultNumberItem">60</button>
                        <button type='button' className="resultNumberItem">61</button>
                        <button type='button' className="resultNumberItem">62</button>
                        <button type='button' className="resultNumberItem">63</button>
                        <button type='button' className="resultNumberItem">64</button>
                        <button type='button' className="resultNumberItem">65</button>
                        <button type='button' className="resultNumberItem">66</button>
                        <button type='button' className="resultNumberItem">67</button>
                        <button type='button' className="resultNumberItem">68</button>
                        <button type='button' className="resultNumberItem">69</button>
                        <button type='button' className="resultNumberItem">70</button>
                        <button type='button' className="resultNumberItem">71</button>
                        <button type='button' className="resultNumberItem">72</button>
                        <button type='button' className="resultNumberItem">73</button>
                        <button type='button' className="resultNumberItem">74</button>
                        <button type='button' className="resultNumberItem">75</button>
                        <button type='button' className="resultNumberItem">76</button>
                        <button type='button' className="resultNumberItem">77</button>
                        <button type='button' className="resultNumberItem">78</button>
                        <button type='button' className="resultNumberItem">79</button>
                        <button type='button' className="resultNumberItem">80</button>
                        <button type='button' className="resultNumberItem">81</button>
                        <button type='button' className="resultNumberItem">82</button>
                        <button type='button' className="resultNumberItem">83</button>
                        <button type='button' className="resultNumberItem">84</button>
                        <button type='button' className="resultNumberItem">85</button>
                        <button type='button' className="resultNumberItem">86</button>
                        <button type='button' className="resultNumberItem">87</button>
                        <button type='button' className="resultNumberItem">88</button>
                        <button type='button' className="resultNumberItem">89</button>
                        <button type='button' className="resultNumberItem">90</button>
                        <button type='button' className="resultNumberItem">91</button>
                        <button type='button' className="resultNumberItem">92</button>
                        <button type='button' className="resultNumberItem">93</button>
                        <button type='button' className="resultNumberItem">94</button>
                        <button type='button' className="resultNumberItem">95</button>
                        <button type='button' className="resultNumberItem">96</button>
                        <button type='button' className="resultNumberItem">97</button>
                        <button type='button' className="resultNumberItem">98</button>
                        <button type='button' className="resultNumberItem">99</button>
                    </div>
                </div> 
            </div>
            <Footer/>
        </div>
     );
}

export default Resultpage;