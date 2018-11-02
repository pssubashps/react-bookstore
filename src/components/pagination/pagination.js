class Pagination extends Component {

    constructor(props){
      super(props);
      const { totalRecords = 0, pageLimit = 10, pageNeighbours = 0 } = props;
      this.pageLimit = pageLimit;
      this.totalRecords = totalRecords;
      this.pageNeighbours = pageNeighbours;
      this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
      this.state = { currentPage: 1 };

    }

    componentDidMount() {
      this.gotoPage(1);
    }

    gotoPage = page => {
   const { onPageChanged = f => f } = this.props;

   const currentPage = Math.max(0, Math.min(page, this.totalPages));

   const paginationData = {
     currentPage,
     totalPages: this.totalPages,
     pageLimit: this.pageLimit,
     totalRecords: this.totalRecords
   };

   this.setState({ currentPage }, () => onPageChanged(paginationData));
}
}
