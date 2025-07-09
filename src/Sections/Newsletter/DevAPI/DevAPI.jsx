import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DevApiStyleWrapper from "./DevAPI.style";
import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const codeTabs = [
  {
  title: "Node",
  code: (
    <>
      <span className="variable">const</span> fs = <span className="class">require</span>(<span className="string">'fs'</span>);<br />
      <span className="variable">const</span> os = <span className="class">require</span>(<span className="string">'os'</span>);<br />
      <span className="variable">const</span> path = <span className="class">require</span>(<span className="string">'path'</span>);<br />
      fs.writeFileSync(<span className="string">'test.txt'</span>, <span className="string">'Hello Node.js'</span>);<br />
      <span className="variable">const</span> data = fs.readFileSync(<span className="string">'test.txt'</span>, <span className="string">'utf8'</span>);<br />
      <span className="variable">console.log</span>(data);<br />
      <span className="variable">console.log</span>(os.platform());<br />
      <span className="variable">console.log</span>(path.join(<span className="string">'dir'</span>, <span className="string">'file.txt'</span>));<br />
      <span className="variable">const</span> arr = [1, 2, 3];<br />
      <span className="variable">arr.forEach</span>(num =&gt; {"{"} <span className="variable">console.log</span>(num); {"}"});<br />
      <span className="variable">console.log</span>(<span className="string">'Node script done'</span>);
    </>
  ),
},

  {
    title: "Ruby",
    code: (
      <>
        <span className="variable">def</span> <span className="class">greet</span>(name)<br />
        &nbsp;&nbsp;<span className="variable">puts</span> <span className="string">"Hello, #{'{' + 'name' + '}'}!"</span><br />
        <span className="variable">end</span><br />
        greet(<span className="string">'Ruby'</span>)<br />
        arr = [1, 2, 3, 4, 5]<br />
        arr.each do |n|<br />
        &nbsp;&nbsp;<span className="variable">puts</span> n * 2<br />
        end<br />
        hash = {"{"}<span className="string">'name'</span>: <span className="string">'John'</span>, <span className="string">'age'</span>: 30{"}"}<br />
        <span className="variable">puts</span> <span className="string">"Name is hash[:name]"</span><br />
        if hash[:age] > 25<br />
        &nbsp;&nbsp;<span className="variable">puts</span> <span className="string">"Adult"</span><br />
        end
      </>
    ),
  },
  {
  title: "Java",
  code: (
    <>
      <span className="variable">public class</span> HelloWorld {"{"}<br />
      &nbsp;&nbsp;<span className="variable">public static void</span> main(String[] args) {"{"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"Java Example"</span>);<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">int</span> a = 5;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">int</span> b = 10;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">int</span> sum = a + b;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"Sum: "</span> + sum);<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">for</span> (<span className="variable">int</span> i = 0; i &lt; 5; i++) {"{"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);<br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
      &nbsp;&nbsp;{"}"}<br />
      {"}"}
    </>
  ),
},

  {
    title: "Python",
    code: (
      <>
        import numpy as np<br />
        a = np.ones((3, 2))<br />
        b = np.array([1, 2, 3])<br />
        c = np.linspace(2, 3, 100)<br />
        print(a * 1.5)<br />
        x = np.zeros((4, 4))<br />
        y = np.full((2, 2), 5)<br />
        print(x + y)<br />
        if a.any():<br />
        &nbsp;&nbsp;print("Array has values")<br />
        for i in range(3):<br />
        &nbsp;&nbsp;print(i)
      </>
    ),
  },
  {
  title: "PHP",
  code: (
    <>
      <span className="variable">&lt;?php</span><br />
      <span className="variable">$name</span> = <span className="string">"John"</span>;<br />
      <span className="variable">echo</span> <span className="string">"Hello "</span> . <span className="variable">$name</span> . <span className="string">"&lt;br&gt;"</span>;<br />
      <span className="variable">$arr</span> = <span className="class">array</span>(1, 2, 3, 4, 5);<br />
      <span className="variable">foreach</span> (<span className="variable">$arr</span> as <span className="variable">$num</span>) {"{"}<br />
      &nbsp;&nbsp;<span className="variable">echo</span> <span className="variable">$num</span> * 2 . <span className="string">"&lt;br&gt;"</span>;<br />
      {"}"}<br />
      <span className="variable">function</span> greet(<span className="variable">$who</span>) {"{"}<br />
      &nbsp;&nbsp;<span className="variable">return</span> <span className="string">"Hi "</span> . <span className="variable">$who</span>;<br />
      {"}"}<br />
      <span className="variable">echo</span> greet(<span className="string">"PHP"</span>);<br />
      <span className="variable">echo</span> <span className="string">"&lt;br&gt;Done!"</span>;
    </>
  ),
},

];

const DevAPI = () => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTabIndex((prev) => (prev + 1) % codeTabs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DevApiStyleWrapper className="developer-apis-Section mb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <div className="developer-apis-left">
                <div className="section-title2">
                  <p>Developer APIs</p>
                  <h2>Fast setup Easy-to-use APIs</h2>
                </div>
                <div className="developer-apis-text">
                  <p>
                    I must explain to you how all this mistaken. Tdea of
                    denouncing pleasure and praising pain was born and I will
                    give you acomplete account create automation scenarios
                  </p>
                  <a href="#" className="text-link">
                    <span>Read Documentation</span>
                    <GoArrowRight />
                  </a>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="developer-apis-right">
                <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
                  <TabList className="developer-apis-tab-buttons nav nav-tabs">
                    {codeTabs.map((tab, index) => (
                      <Tab className="api-tab-btn" key={index}>
                        {tab.title}
                      </Tab>
                    ))}
                  </TabList>

                  {codeTabs.map((tab, index) => (
                    <TabPanel key={index}>
                      <div className="developer-apis-notepad">
                        <div className="custom-textarea">
                          <div className="textarea">{tab.code}</div>
                          <div className="linenumbers">
                            <div className="number">
                              {Array.from({ length: 12 }).map((_, i) => (
                                <span key={i}>{i + 1}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </DevApiStyleWrapper>
  );
};

export default DevAPI;
