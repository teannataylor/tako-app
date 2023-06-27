class AddDeveloperIdToTasks < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :developer_id, :integer
  end
end
