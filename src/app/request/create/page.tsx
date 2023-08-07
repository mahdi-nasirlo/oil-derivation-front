import { Alert, Button, Divider, Steps } from "antd";
import staticMessages from "../../../../lib/staticMessages";
import React from "react";
import CreateForm from "./fomr";

export default function NewRequest() {
  return (
    <>
      <Steps
        className="pb-8"
        // style={{ margi: "32px 0" }}
        items={[
          {
            title: 'اطلاعات واحد تولیدی',
            description: 'اطلاعات عمومی'
          },
          {
            title: 'اطلاعات مدیریتی',
            description: 'اطلاعات اشخاص'
          },
          {
            title: 'اطلاعات پرسنلی',
            description: 'تعداد پرسنل'
          },
          {
            title: 'اطلاعات مجوز',
            description: 'مجوز تولید'
          },
          {
            title: 'اطلاعات تماس',
            description: 'آدرس و شماره تماس'
          },
          {
            title: 'فرآیند تولید',
            description: 'شرح فرایند'
          },
        ]} />
      <div className="box-border w-full mt-8 p-6">
        <Alert className="border-none w-full text-right text-base font-normal text-red-500" message={staticMessages.formAlert} type="error" />
        <Divider />
        <CreateForm />
      </div>
    </>
  )
}
