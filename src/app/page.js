import Image from "next/image";
import logoMb from "../../public/images/462574643_8581399418647012_380876337179615629_n.png";
import logoRight from "../../public/images/logo_right.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";


export default function Home() {
  return (
    <div className="flex bg-white w-[1376px] h-[700px] rounded-[32px] p-[16px] align-center"  >
      <div className="px-[64px] flex flex-col gap-8 p-8 w-[555px] h-[668px] py-[32px] ">
        <div className="">
          <Image
            src={logoMb}
            alt="logo mb"
            width={161.05}
            height={52.69}
          />
        </div>
        <hr />
        <div className="text-[24] font-medium font-garant">
          DANH SÁCH CHI NHÁNH
        </div>
        <hr />
        <div className="text-[24] font-medium font-garant">
          EMAIL:MB247@MBBANK.COM.VN
        </div>
        <hr />
        <div className="">
          <div className="text-[24] font-medium font-garant ">
            HOTLINE:1900 545426
          </div>
          <div className="text-[24] font-medium font-garant ">
            QUỐC TẾ:(84-24)3767 4050
          </div>
        </div>
        <hr />
        <div className="text-[24] font-medium font-garant">
          DANH SÁCH ATM
        </div>
        <hr />
        <div className="flex gap-x-[24px]">
          <div>
          <TiSocialLinkedinCircular className="w-[30px] h-[30px]"/>

          </div>
          <div>
          <IoLogoFacebook className="w-[30px] h-[30px]"/>
          </div>
          <div>
          <IoLogoYoutube className="w-[30px] h-[30px]"/>
          </div>
          <div>
          <IoLogoInstagram className="w-[30px] h-[30px]"/>

          </div>
        </div>
        <hr />
        <div className="">
          <div className="text-[10px] font-[600] text-[#00000099] font-garant">
            BẢN QUYỀN &copy; 2024 THUỘC VỀ NGÂN HÀNG QUÂN ĐỘI. BẢO LƯU MỌI QUYỀN.
          </div>
          <div className="flex " >
            <div className="text-[10px] font-[600] text-[#00000099] underline mr-[21] font-garant">
              ĐIỀU KHOẢN SỬ DỤNG
            </div>
            <div className="text-[10px] font-[600] text-[#00000099] underline underline mr-[21] font-garant">
              AN TOÀN BẢO MẬT
            </div>
            <div className="text-[10px] font-[600] text-[#00000099] underline font-garant">
              KẾT NỐI VỚI CHÚNG TÔI
            </div>
          </div>
        </div>

      </div>
      <div className="w-{789} h-{668}">
        <Image
          src={logoRight}
          alt="logo text v"
          width={789}
          height={668}
        />
      </div>
    </div>

  );
}
