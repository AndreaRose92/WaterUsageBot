class CreateComparisons < ActiveRecord::Migration[7.0]
  def change
    create_table :comparisons do |t|
      t.string :object
      t.integer :volume
      t.string :tidbit

      t.timestamps
    end
  end
end
