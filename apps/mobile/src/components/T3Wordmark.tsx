import type { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";
import { withUniwind } from "uniwind";

const ThemedPath = withUniwind(Path);

export function T3Wordmark(props: {
  readonly height: number;
  readonly color?: ColorValue;
  readonly colorClassName?: string;
}) {
  const aspectRatio = 386 / 98;
  return (
    <Svg
      // oxlint-disable-next-line t3code/no-untranslated-copy -- product wordmark
      accessibilityLabel="Temu3"
      height={props.height}
      width={props.height * aspectRatio}
      viewBox="62 340 386 98"
    >
      <ThemedPath
        d="M64 344H128V363H106V434H86V363H64V344ZM140 344H198V362H160V379H192V396H160V416H198V434H140V344ZM210 344H231L248 394L265 344H286V434H267V379L254 418H242L229 379V434H210V344ZM298 344H318V398C318 409 323 416 331 416C339 416 344 409 344 398V344H364V400C364 422 351 436 331 436C311 436 298 422 298 400V344ZM378 360C385 348 396 342 411 342C430 342 442 352 442 367C442 377 437 384 427 387C438 390 445 398 445 410C445 426 432 436 410 436C394 436 382 429 375 418L391 407C395 414 401 418 410 418C419 418 424 414 424 407C424 400 418 396 407 396H399V379H406C416 379 422 375 422 369C422 363 417 359 409 359C402 359 396 363 393 369L378 360Z"
        color={props.color}
        colorClassName={props.colorClassName}
        fill="currentColor"
      />
    </Svg>
  );
}
