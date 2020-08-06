Basic Select:

```jsx
<Select style={{ width: 200 }} placeholder="Please select">
  {Array.from({length: 10}).map((it, index) =>
    <Select.Option value={index} key={index}>Option-{index}</Select.Option>
  )}
</Select>
```
Multiple Select:

多选模式。

```jsx
<Select allowClear style={{ width: 400 }} multiple placeholder="Please select">
  {Array.from({length: 10}).map((it, index) =>
    <Select.Option value={index} key={index}>Option-{index}</Select.Option>
  )}
</Select>
```
ShowSearch:

```jsx
<Select showSearch style={{ width: 200 }} placeholder="Please select">
  <Select.Option value="jack">Jack</Select.Option>
  <Select.Option value="lucy">Lucy</Select.Option>
  <Select.Option value="disabled" disabled>
    Disabled
  </Select.Option>
  <Select.Option value="Yiminghe">yiminghe</Select.Option>
</Select>
```
AllowClear:

```jsx
<Select allowClear style={{ width: 200 }} placeholder="Please select">
  <Select.Option value="jack">Jack</Select.Option>
  <Select.Option value="lucy">Lucy</Select.Option>
  <Select.Option value="disabled" disabled>
    Disabled
  </Select.Option>
  <Select.Option value="Yiminghe">yiminghe</Select.Option>
</Select>
```
Disabled:

```jsx
<Select disabled style={{ width: 200 }} placeholder="Please select">
  <Select.Option value="jack">Jack</Select.Option>
  <Select.Option value="lucy">Lucy</Select.Option>
  <Select.Option value="disabled" disabled>
    Disabled
  </Select.Option>
  <Select.Option value="Yiminghe">yiminghe</Select.Option>
</Select>
```
