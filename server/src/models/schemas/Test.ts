import { Column, Model, Table, DataType } from 'sequelize-typescript'

@Table({
  tableName: 'note'
})
export class Test extends Model {
  public static NOTE_TABLE_NAME = 'note' as string
  public static NODE_ID = 'id' as string
  public static NODE_NAME = 'name' as string
  public static NODE_DESCRIPTION = 'description' as string

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  })
  id: number = 0
  @Column({
    type: DataType.STRING(100),
    field: 'name'
  })
  name!: string
  @Column({
    type: DataType.STRING(255),
    field: 'description'
  })
  description!: string
}
