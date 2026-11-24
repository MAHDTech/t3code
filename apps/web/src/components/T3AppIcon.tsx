// The production icon, as GitHub shows the Temu3 Code app, whatever this build's channel.
import appIconUrl from "../../../../assets/temu/temu3-icon-192.png";

export function T3AppIcon(props: { readonly className?: string }) {
  return <img src={appIconUrl} alt="" className={props.className} />;
}
