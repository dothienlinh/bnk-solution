import './App.css'
import Header from './components/Header/Header'
import calendar from './assets/images/calendar.png'
import Image from './components/Image/Image'
import copyLink from './assets/images/copy-link.svg'
import twitter from './assets/images/light-twitter.svg'
import email from './assets/images/light-mail.svg'
import linkedin from './assets/images/light-linked.svg'
import facebook from './assets/images/light-facebook.svg'
import contentImg from './assets/images/1.jpg'
import PostContents from './components/PostContents/PostContents'
import PostTitle from './components/PostTitle/PostTitle'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-[200px] py-[120px] bg-[#f4f4f4]">
        <div className="max-w-[1140px] px-[15px] mx-auto">
          <div className="bg-white rounded-2xl">
            <div className="pt-10 pr-[63px] pl-[67px]">
              <h2 className="font-centuryGothicBold text-[40px] text-[#262525] leading-[44px] mb-5">
                Revolutionizing Factory Inspection: BnK's Journey into Japan's
                Smart Factory Landscape
              </h2>
              <a
                href="/"
                className="inline-block px-5 py-[6px] my-[10px] text-[#333] bg-[#01a89e33] text-sm font-centuryGothicBold rounded transition hover:text-white"
              >
                Business
              </a>
              <div className="mb-10 flex justify-between items-center">
                <div className="mt-[10px] flex items-center gap-2">
                  <Image src={calendar} />
                  <span>13/12/2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Share: </span>
                  <Image src={copyLink} />
                  <Image src={twitter} />
                  <Image src={email} />
                  <Image src={linkedin} />
                  <Image src={facebook} />
                </div>
              </div>
            </div>
            <div>
              <Image src={contentImg} />
            </div>

            {/* content */}
            <div className="mt-10 pb-10 pl-[67px] pr-[63px]">
              <PostTitle>Introduction:</PostTitle>
              <PostContents>
                In a bold leap toward the future of manufacturing, BnK proudly
                unveils its latest venture in Japan, promising to redefine the
                landscape of factory inspections. This groundbreaking project is
                set to transform the traditional approach to quality control and
                monitoring, ushering in an era of remote inspections powered by
                cutting-edge virtual reality (VR) technology and 360-degree
                cameras. Through this innovative solution, BnK eliminates the
                need for physical on-site visits, allowing stakeholders to
                access real-time factory floor status anywhere in the world.
              </PostContents>
              <PostTitle>The Technological Marvel:</PostTitle>
              <PostContents>
                At the heart of this transformative project lies the seamless
                integration of state-of-the-art technologies. Leveraging the
                power of virtual reality, BnK processes video and audio data on
                a cloud-based platform, replicating the on-site experience with
                astonishing accuracy. The project's cornerstone platform is
                Tencent Cloud, with BnK utilizing Tencent Cloud Kubernetes to
                deploy microservices, ensuring a smooth and reliable user
                experience. BnK has collaborated with Wowza, a leading streaming
                technology provider, to address the critical latency issue. By
                incorporating WebRTC technology, the project achieves delays of
                less than 1 second, ensuring that stakeholders receive real-time
                updates and insights, enhancing the overall effectiveness of
                remote inspections.
              </PostContents>
              <PostTitle>Key Technologies Employed:</PostTitle>
              <ol className="list-decimal pl-5">
                <li className="post-content">
                  <PostContents>Frontend: ReactJS</PostContents>
                </li>
                <li className="post-content">
                  <PostContents>Frontend: ReactJS</PostContents>
                </li>
                <li className="post-content">
                  <PostContents>Mobile App: React Native</PostContents>
                </li>
                <li className="post-content">
                  <PostContents>Database: PostgreSQL</PostContents>
                </li>
              </ol>
              <PostContents>
                Collectively, these technologies contribute to the robustness
                and flexibility of the solution, providing a user-friendly
                interface and a reliable backend infrastructure to support the
                intricate demands of remote factory inspections.
              </PostContents>
              <PostTitle>The Customer Experience:</PostTitle>
              <PostContents>
                The response from customers has been overwhelmingly positive,
                opening up new avenues for BnK in the dynamic Japanese Smart
                Factory market. The ability to conduct remote inspections has
                streamlined operations and demonstrated the potential for
                significant cost savings. Customers express satisfaction with
                the real-time insights and the convenience afforded by the
                mobile app, emphasizing the success of BnK's foray into the
                convergence of reality and virtuality.
              </PostContents>
              <PostTitle>Future Prospects::</PostTitle>
              <PostContents>
                The success of BnK's venture in Japan has solidified its
                position in the market and sparked interest in exploring
                additional features and collaborations. The expressed enthusiasm
                from stakeholders indicates a positive outlook for future
                endeavors in the region. BnK is poised to play a pivotal role in
                shaping the future of manufacturing, with an eye on continuous
                innovation and adaptation to emerging technologies.
              </PostContents>
              <PostTitle>Conclusion:</PostTitle>
              <PostContents>
                As BnK pioneers the convergence of reality and virtuality in the
                manufacturing industry, the venture into remote factory
                inspections in Japan is a testament to technology's
                transformative power. The success achieved so far is a stepping
                stone towards a future where geographical constraints are no
                longer barriers to efficient and effective quality control. Join
                us on this exciting journey as we redefine the norms of factory
                inspections, setting new standards for the Smart Factory
                landscape in Japan and beyond.
              </PostContents>

              <div className="py-6 h-[104px] rounded-lg bg-[#01a89e1a] flex items-center justify-around">
                <h2 className="text-[#263F61] text-2xl font-centuryGothicBold">
                  How can we help you?
                </h2>
                <button className="px-3 text-white bg-[#01A89E] rounded inline-block w-[167px] h-14">
                  Contacts Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
