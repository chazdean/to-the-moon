class AddUsersToPortfolioItems < ActiveRecord::Migration[5.2]
  def change
    add_reference :portfolio_items, :user, index: true, foreign_key: true
    add_reference :portfolio_items, :asset, index: true, foreign_key: true
  end
end
