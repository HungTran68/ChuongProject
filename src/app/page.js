import Image from "next/image";
import logoMb from "../../public/images/462574643_8581399418647012_380876337179615629_n.png";
import logoRight from "../../public/images/logo_right.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";


export default function Home() {
  return (
    <footer className="flex mx-auto bg-white w-full max-w-screen-1376 h-auto rounded-[32px] p-[16px]">
      <div className="flex flex-col px-[64px] py-[32px] ">
        <div className="pb-[32px]">
          <Image
            src={logoMb}
            alt="logo mb"
            width={161.05}
            height={52.69}
          />
        </div>
        <hr />
        <div className="text-24px font-medium font-garant leading-[34.8px] py-[32px]">
          DANH SÁCH CHI NHÁNH
        </div>
        <hr />
        <div className="text-24px font-medium font-garant leading-[34.8px] py-[32px]" >
          EMAIL:MB247@MBBANK.COM.VN
        </div>
        <hr />
        <div className="py-[32px]">
          <div className="text-24px font-medium font-garant leading-[34.8px]">
            HOTLINE:1900 545426
          </div>
          <div className="text-24px font-medium font-garant leading-[34.8px]">
            QUỐC TẾ:(84-24)3767 4050
          </div>
        </div>
        <hr />
        <div className="text-24px font-medium font-garant leading-[34.8px] py-[32px]">
          DANH SÁCH ATM
        </div>
        <hr />
        <div className="flex gap-x-[24px] py-[32px]">
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
        <div className="pt-[32px]">
          <div className="text-14px font-semibold text-[#00000099] font-garant leading-[20.3px] whitespace-nowrap">
            BẢN QUYỀN &copy; 2024 THUỘC VỀ NGÂN HÀNG QUÂN ĐỘI. BẢO LƯU MỌI QUYỀN.
          </div>
          <div className="flex " >
            <div className="text-14px font-semibold text-[#00000099] underline pr-[21] font-garant leading-[20.3px]">
              ĐIỀU KHOẢN SỬ DỤNG
            </div>
            <div className="text-14px font-semibold text-[#00000099] underline underline pr-[21] font-garant leading-[20.3px]">
              AN TOÀN BẢO MẬT
            </div>
            <div className="text-14px font-semibold text-[#00000099] underline font-garant leading-[20.3px]">
              KẾT NỐI VỚI CHÚNG TÔI
            </div>
          </div>
        </div>

      </div>
      <div className="relative w-full h-auto">
        <Image
          src={logoRight}
          alt="logo text v"
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
    </footer>
  );
}
