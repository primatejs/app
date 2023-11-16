import t from "@primate/i18n/react";

export default function(props) {
  return <div>TEST{props.hi}TEST
    <div>{t("hi")}</div>
    </div>
 }
