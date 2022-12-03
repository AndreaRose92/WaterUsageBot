class CreateCities < ActiveRecord::Migration[7.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :state
      t.integer :local_gov_phone
      t.string :loval_gov_email

      t.timestamps
    end
  end
end
