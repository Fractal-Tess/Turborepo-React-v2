import { Button } from 'package-ui';
import { themes } from 'package-types';

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      {themes}
    </div>
  );
}
